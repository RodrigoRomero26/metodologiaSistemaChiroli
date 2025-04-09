
import { useEffect, useState } from "react"
import { ICursos } from "../../../types/ICursos"
import { getCursos } from "../../http/api"
import { CursoCard } from "../../ui/CursoCard"
import styles from "./CursosScreens.module.css"


export const CursosScreens = () => {

  const [cursosData, setCursosData] = useState<ICursos[]>([]); 

  useEffect(() => {
    const fetchCursos = async () => {
        const cursos = await getCursos();
        setCursosData(cursos); 
    };
    fetchCursos(); 
  }, []);

  return (
    <div className={styles.principalContainerCursos}>
        <div className={styles.dataContainerCursos}>
            <h3>Cursos</h3>
            <div className={styles.cursosList}>
              {cursosData.map((curso) => (
                <CursoCard key={curso.id} curso={curso} />
              ))}
            </div>
        </div>
    </div>
  )
}
