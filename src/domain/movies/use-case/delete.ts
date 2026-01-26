import {BaseMoviesUseCase} from "@/domain/movies/use-case/base.ts";
import type {IDeleteMovieDto, IDeleteMoviePort, IDeleteMovieUseCase} from "@/domain/movies/interface";

// Тут просто кладесть паттернов: инкапсуляция, наследование, Single, Interface, Dependency
class DeleteMoviesUseCase extends BaseMoviesUseCase implements IDeleteMovieUseCase {
    public async execute(port: IDeleteMoviePort): Promise<IDeleteMovieDto> {
        return this._repository.delete(port)
    }
}

export {DeleteMoviesUseCase}
