import type {IMovieEntity} from "./entity.ts";

interface IGetAllMoviesForm {

    genre?: string;
    releaseYear?: number;
    createdFrom?: Date;
    createdTo?: Date;
    updatedFrom?: Date;
    updatedTo?: Date;
    search?: string;
}

type ICreateMovieForm = IMovieEntity
type IUpdateMovieForm = IMovieEntity

export type {IGetAllMoviesForm, ICreateMovieForm, IUpdateMovieForm}
