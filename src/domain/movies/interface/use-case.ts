import type {IUseCase} from "@/domain/common/http/use-case.ts";
import type {ICreateMoviePort, IDeleteMoviePort, IGetAllMoviePort, IGetOneMoviePort, IUpdateMoviePort} from "./port.ts";
import type {ICreateMovieDto, IDeleteMovieDto, IGetAllMovieDto, IGetOneMovieDto, IUpdateMovieDto} from "./dto.ts";

type IGetAllMovieUseCase = IUseCase<IGetAllMoviePort, IGetAllMovieDto>
type IGetOneMovieUseCase = IUseCase<IGetOneMoviePort, IGetOneMovieDto>
type ICreateMovieUseCase = IUseCase<ICreateMoviePort, ICreateMovieDto>
type IDeleteMovieUseCase = IUseCase<IDeleteMoviePort, IDeleteMovieDto>
type IUpdateMovieUseCase = IUseCase<IUpdateMoviePort, IUpdateMovieDto>

export type {
    IGetAllMovieUseCase,
    IGetOneMovieUseCase,
    ICreateMovieUseCase,
    IDeleteMovieUseCase,
    IUpdateMovieUseCase
}
