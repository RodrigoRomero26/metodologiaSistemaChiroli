import { useEffect, useState } from "react";
import styles from "./EstudiantesScreens.module.css";
import { Link, useParams } from "react-router";
import { ICursos } from "../../../types/ICursos";
import { getCursosById } from "../../http/api";

export const EstudiantesScreens = () => {
	const { id } = useParams();
	const [curso, setCurso] = useState<ICursos | null>(null);
    const [existId, setExistId] = useState(false);
	useEffect(() => {
		const fetchCurso = async () => {
			try {
				if (id) {
					const cursoData = await getCursosById(id);
                    setExistId(true)
					setCurso(cursoData);
				}else {
                    console.error("ID no proporcionado");
                }
			} catch (error) {
				console.error("Error fetching curso:", error);
			}
		};
		fetchCurso();
	}, [id]);
	console.log(curso);

	return (
		<div className={styles.estudiantesPrincipalContainer}>
			<div className={styles.estudiantesPrincipalDataContainer}>
				<div className={styles.estudiantesTitleAndButton}>
					<div className={styles.volverContainer}>
						<Link to={"/"} className={styles.volverLink}>Volver</Link>
					</div>
					<div>
						<h1>Alumnos de: {curso?.nombre}</h1>
					</div>
				</div>
				<div className={styles.estudiantesContainer}>
					<ul className={styles.estudiantesList}>
						{existId ? (
							curso?.estudiantes.map((estudiante) => (
								<li key={estudiante.id} className={styles.estudianteItem}>
									<p>
										<strong>ID:</strong> {estudiante.id}
									</p>
									<p>
										<strong>Nombre:</strong> {estudiante.nombre}
									</p>
									<p>
										<strong>Edad:</strong> {estudiante.edad}
									</p>
								</li>
							))
						) : (
							<li className={styles.estudianteItem}>
								<p>No hay estudiantes para mostrar</p>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};
