import type {IGetAllMovieDto} from "@/domain/movies/interface";

// обязательный он тут тк я isLoading использовать буду
interface IMoviesListProps {
    data: IGetAllMovieDto
}

export type {IMoviesListProps}
