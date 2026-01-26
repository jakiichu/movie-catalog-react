import {BaseMoviesUseCase} from "@/domain/movies/use-case/base.ts";
import type {ICreateMovieDto, ICreateMoviePort, ICreateMovieUseCase} from "@/domain/movies/interface";

// Тут просто кладесть паттернов: инкапсуляция, наследование, Single, Interface, Dependency
class CreateMoviesUseCase extends BaseMoviesUseCase implements ICreateMovieUseCase {
    public async execute(port: ICreateMoviePort): Promise<ICreateMovieDto> {
        return this._repository.create(port)
    }
}

export {CreateMoviesUseCase}
