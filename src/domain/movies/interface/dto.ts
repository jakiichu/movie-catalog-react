import type {IMovieEntity} from "./entity.ts";

// войды сделал чтоб привести к единому виду но можно и без этого

type IGetAllMovieDto = Array<IMovieEntity>;
type ICreateMovieDto = void;
type IUpdateMovieDto = void;
type IDeleteMovieDto = void;

export type {
    IGetAllMovieDto,
    ICreateMovieDto,
    IUpdateMovieDto,
    IDeleteMovieDto
}
