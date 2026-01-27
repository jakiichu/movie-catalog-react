import {BaseMoviesUseCase} from "@/domain/movies/use-case/base.ts";
import type {IGetOneMovieDto, IGetOneMoviePort, IGetOneMovieUseCase} from "@/domain/movies/interface";

class GetOneMoviesUseCase extends BaseMoviesUseCase implements IGetOneMovieUseCase {
    public async execute(port: IGetOneMoviePort): Promise<IGetOneMovieDto> {
        return this._repository.getOne(port)
    }
}

export {GetOneMoviesUseCase}
