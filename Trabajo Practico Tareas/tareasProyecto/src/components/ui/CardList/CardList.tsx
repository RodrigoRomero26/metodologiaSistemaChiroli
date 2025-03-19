import { FC, use } from "react";
import { ITarea } from "../../../types/ITarea";
import styles from "./CardList.module.css";
import { useTareas } from "../../../hooks/useTareas";

type CardList = {
	tarea: ITarea;
	handleOpenModalEdit: (tarea: ITarea) => void;
};

export const CardList: FC<CardList> = ({ tarea, handleOpenModalEdit }) => {

	const {eliminarTarea} = useTareas();
    const eliminarTareaById = () => {
        eliminarTarea(tarea.id!);
    }

    const editarTarea = () => {
        handleOpenModalEdit(tarea);
    }


	return (
		<div className={styles.containerCard}>
			<div className={styles.containerInfoCard}>
				<h3>Titulo: {tarea.titulo}</h3>
				<p>Descripcion: {tarea.descripcion}</p>
				<p>
					<b>Fecha Limite: {tarea.fechaLimite}</b>
				</p>
			</div>
            <div className={styles.actionCard}>
                <button onClick={eliminarTareaById}>Eliminar</button>
                <button onClick={editarTarea}>Editar</button>
            </div>
		</div>
	);
};
