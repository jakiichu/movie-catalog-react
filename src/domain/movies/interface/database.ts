import type {
    ICreateMoviePort,
    IDeleteMoviePort,
    IGetAllMoviePort,
    IGetOneMoviePort,
    IUpdateMoviePort
} from "@/domain/movies/interface/port.ts";
import type {
    ICreateMovieDto,
    IDeleteMovieDto,
    IGetAllMovieDto,
    IGetOneMovieDto,
    IUpdateMovieDto
} from "@/domain/movies/interface/dto.ts";

interface IMovieDatabase {
    getAll(port: IGetAllMoviePort): IGetAllMovieDto;

    getOne(port: IGetOneMoviePort): IGetOneMovieDto;

    create(port: ICreateMoviePort): ICreateMovieDto

    update(id: string, port: IUpdateMoviePort): IUpdateMovieDto

    delete(movie: IDeleteMoviePort): IDeleteMovieDto
}

export type {IMovieDatabase}
