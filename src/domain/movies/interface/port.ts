import type {IMovieEntity} from "@/domain/movies/interface/entity.ts";
import type {IGetAllMoviesForm} from "@/domain/movies/interface/form.ts";

type IGetAllMoviePort = IGetAllMoviesForm;
type IGetOneMoviePort = string;
type ICreateMoviePort = IMovieEntity;
type IUpdateMoviePort = IMovieEntity;
type IDeleteMoviePort = string;


export type {
    IGetAllMoviePort,
    IGetOneMoviePort,
    ICreateMoviePort,
    IUpdateMoviePort,
    IDeleteMoviePort
}
