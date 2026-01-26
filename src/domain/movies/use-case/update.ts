import {BaseMoviesUseCase} from "@/domain/movies/use-case/base.ts";
import type {IUpdateMovieDto, IUpdateMoviePort, IUpdateMovieUseCase} from "@/domain/movies/interface";

// Тут просто кладесть паттернов: инкапсуляция, наследование, Single, Interface, Dependency
class UpdateMoviesUseCase extends BaseMoviesUseCase implements IUpdateMovieUseCase {
    public async execute(port: IUpdateMoviePort): Promise<IUpdateMovieDto> {
        return this._repository.update(port)
    }
}

export {UpdateMoviesUseCase}
