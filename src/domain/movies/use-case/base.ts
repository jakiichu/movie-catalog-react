import type {IMovieRepository} from "@/domain/movies/interface";

// BaseMoviesUseCase уменьшает дублирование кода и позволяет переиспользовать репозиторий для других use-case. Буквально из своей документации взял текст). По факту реализация паттерна инкапсуляции
class BaseMoviesUseCase {
    protected readonly _repository: IMovieRepository

    constructor(MovieRepository: IMovieRepository) {
        this._repository = MovieRepository
    }
}

export {BaseMoviesUseCase}
