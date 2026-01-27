import type {
    ICreateMovieDto,
    IDeleteMovieDto,
    IGetAllMovieDto,
    IGetOneMovieDto,
    IUpdateMovieDto
} from "@/domain/movies/interface/dto.ts";
import type {
    ICreateMoviePort,
    IDeleteMoviePort,
    IGetAllMoviePort,
    IGetOneMoviePort,
    IUpdateMoviePort
} from "@/domain/movies/interface/port.ts";

interface IMovieRepository {
    getAll(port: IGetAllMoviePort): Promise<IGetAllMovieDto>;

    getOne(port: IGetOneMoviePort): Promise<IGetOneMovieDto>;

    create(port: ICreateMoviePort): Promise<ICreateMovieDto>

    update(port: IUpdateMoviePort): Promise<IUpdateMovieDto>

    delete(port: IDeleteMoviePort): Promise<IDeleteMovieDto>
}

export type {IMovieRepository}
