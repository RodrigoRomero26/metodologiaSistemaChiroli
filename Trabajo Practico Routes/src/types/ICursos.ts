import { IEstudiantes } from "./IEstudiantes";

export interface ICursos {
    id: string;
    nombre: string;
    estudiantes: IEstudiantes[];
}