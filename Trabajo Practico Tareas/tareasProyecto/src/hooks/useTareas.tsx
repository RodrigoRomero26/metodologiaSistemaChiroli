import "./customStyles.css";
import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareaStore";
import {
	editarTarea,
	eliminarTareaPorID,
	getAllTareas,
	postNuevaTarea,
} from "../http/tareas";
import { ITarea } from "../types/ITarea";
import Swal from "sweetalert2";

export const useTareas = () => {
	const {
		tareas,
		setArrayTareas,
		agregarNuevaTarea,
		eliminarUnaTarea,
		editarUnaTarea,
	} = tareaStore(
		useShallow((state) => ({
			tareas: state.tareas,
			setArrayTareas: state.setArrayTareas,
			agregarNuevaTarea: state.agregarNuevaTarea,
			eliminarUnaTarea: state.eliminarUnaTarea,
			editarUnaTarea: state.editarUnaTarea,
		}))
	);

	const getTareas = async () => {
		const data = await getAllTareas();
		if (data) {
			setArrayTareas(data);
		}
	};

	const crearTarea = async (nuevaTarea: ITarea) => {
		agregarNuevaTarea(nuevaTarea);
		try {
			await postNuevaTarea(nuevaTarea);
			Swal.fire({
				title: "Confirmado!",
				text: "Tarea creada con exito",
				icon: "success",
				background: "rgba(238, 174, 202, 1)",
				customClass: {
					title: "swal2-title",
					htmlContainer: "swal2-html-container",
				},
			});
		} catch (error) {
			eliminarUnaTarea(nuevaTarea.id!);
			console.log("Algo salio mal al crear", error);
		}
	};

	const putTareaEditar = async (tareaEditada: ITarea) => {
		const estadoprevio = tareas.find((tarea) => tarea.id === tareaEditada.id);

		editarUnaTarea(tareaEditada);

		try {
			await editarTarea(tareaEditada);
			Swal.fire({
				title: "Confirmado!",
				text: "Tarea editada con exito",
				icon: "success",
				background: "rgba(238, 174, 202, 1)",
				customClass: {
					title: "swal2-title",
					htmlContainer: "swal2-html-container",
				},
			});
		} catch (error) {
			if (estadoprevio) editarUnaTarea(estadoprevio);
			console.log("Algo salio mal al editar", error);
		}
	};

	const eliminarTarea = async (idTarea: string) => {
		const estadoprevio = tareas.find((tarea) => tarea.id === idTarea);
		const confirm = await Swal.fire({
			title: "Estas seguro?",
			text: "No podras recuperar la tarea una vez eliminada",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			background: "rgba(238, 174, 202, 1)",
			confirmButtonText: "Si, eliminar",
			cancelButtonText: "Cancelar",
			customClass: {
				title: "swal2-title",
				htmlContainer: "swal2-html-container",
			},
		});
		if (!confirm.isConfirmed) return;
		eliminarUnaTarea(idTarea);
		try {
			await eliminarTareaPorID(idTarea);
			Swal.fire({
				title: "Confirmado!",
				text: "Tarea eliminada con exito",
				background: "rgba(238, 174, 202, 1)",
				icon: "success",
				customClass: {
					title: "swal2-title",
					htmlContainer: "swal2-html-container",
				},
			});
		} catch (error) {
			if (estadoprevio) agregarNuevaTarea(estadoprevio);
			console.log("Algo salio mal al eliminar", error);
		}
	};

	return {
		getTareas,
		crearTarea,
		putTareaEditar,
		eliminarTarea,
		tareas,
	};
};
