import { User } from "../../alumnos-users/models";
import { Curso } from "../../cursos-products/models";

export interface Sale {
    id: string | number;
    userId: string | number;
    courseId: string | number;
    user?: User;
    curso?: Curso;
  }
  
  export interface CreateInscripcionData {
    userId: string | number | null;
    courseId: string | number | null;
  }
  