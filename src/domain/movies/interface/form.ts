import type {IMovieEntity} from "./entity.ts";

interface IGetAllMoviesForm {

    genre?: string;
    releaseYear?: number;
    createdFrom?: string;
    createdTo?: string;
    updatedFrom?: string;
    updatedTo?: string;
    search?: string;
}

type ICreateMovieForm = IMovieEntity
type IUpdateMovieForm = IMovieEntity

export type {IGetAllMoviesForm, ICreateMovieForm, IUpdateMovieForm}
