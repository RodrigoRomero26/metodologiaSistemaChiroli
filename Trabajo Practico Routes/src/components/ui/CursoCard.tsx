import styles from "./CursoCard.module.css";
import { ICursos } from "../../types/ICursos";
import { FC } from "react";
import { Link } from "react-router";

type CursoCardProps = {
	curso: ICursos;
};

export const CursoCard: FC<CursoCardProps> = ({ curso }) => {
	return (
        <Link to={`/curso/${curso.id}`} className={styles.cursoCard}> 
        <div className={styles.cursoCardContainer}>
          <p>
            <strong>Nombre:</strong> {curso.nombre}
          </p>
          <p>
            <strong>ID:</strong> {curso.id}
          </p>
          <p>
            <strong>Alumnos:</strong> {curso.estudiantes.length}
          </p>
        </div>
      </Link>
	);
};
