import type {IUseCase} from "@/domain/common/http/use-case.ts";
import type {ICreateMoviePort, IDeleteMoviePort, IGetAllMoviePort, IUpdateMoviePort} from "./port.ts";
import type {ICreateMovieDto, IDeleteMovieDto, IGetAllMovieDto, IUpdateMovieDto} from "./dto.ts";

type IGetAllMovieUseCase = IUseCase<IGetAllMoviePort, IGetAllMovieDto>
type ICreateMovieUseCase = IUseCase<ICreateMoviePort, ICreateMovieDto>
type IDeleteMovieUseCase = IUseCase<IDeleteMoviePort, IDeleteMovieDto>
type IUpdateMovieUseCase = IUseCase<IUpdateMoviePort, IUpdateMovieDto>

export type {
    IGetAllMovieUseCase,
    ICreateMovieUseCase,
    IDeleteMovieUseCase,
    IUpdateMovieUseCase
}
