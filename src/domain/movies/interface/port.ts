import type {IMovieEntity} from "@/domain/movies/interface/entity.ts";
import type {IGetAllMoviesForm} from "@/domain/movies/interface/form.ts";

type IGetAllMoviePort = IGetAllMoviesForm;
type ICreateMoviePort = IMovieEntity;
type IUpdateMoviePort = IMovieEntity;
type IDeleteMoviePort = string;


export type {
    IGetAllMoviePort,
    ICreateMoviePort,
    IUpdateMoviePort,
    IDeleteMoviePort
}
