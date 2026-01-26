import {BaseMoviesUseCase} from "@/domain/movies/use-case/base.ts";
import type {IGetAllMovieDto, IGetAllMoviePort, IGetAllMovieUseCase} from "@/domain/movies/interface";

// Тут просто кладесть паттернов: инкапсуляция, наследование, Single, Interface, Dependency
class GetAllMoviesUseCase extends BaseMoviesUseCase implements IGetAllMovieUseCase {
    public async execute(port: IGetAllMoviePort): Promise<IGetAllMovieDto> {
        return this._repository.getAll(port)
    }
}

export {GetAllMoviesUseCase}
