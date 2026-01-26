import type {
    ICreateMoviePort,
    IDeleteMoviePort,
    IGetAllMoviePort,
    IUpdateMoviePort
} from "@/domain/movies/interface/port.ts";
import type {
    ICreateMovieDto,
    IDeleteMovieDto,
    IGetAllMovieDto,
    IUpdateMovieDto
} from "@/domain/movies/interface/dto.ts";

interface IMovieDatabase {
    getAll(port: IGetAllMoviePort): IGetAllMovieDto;

    create(port: ICreateMoviePort): ICreateMovieDto

    update(id: string, port: IUpdateMoviePort): IUpdateMovieDto

    delete(movie: IDeleteMoviePort): IDeleteMovieDto
}

export type {IMovieDatabase}
