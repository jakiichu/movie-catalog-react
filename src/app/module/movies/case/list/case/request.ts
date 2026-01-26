import {GetAllMoviesUseCase} from "@/domain/movies/use-case/get-all.ts";
import {movieRepository} from "@/data/singletone";
import type {IGetAllMovieDto, IGetAllMoviePort} from "@/domain/movies/interface";
import {useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/enum";


const useCase = new GetAllMoviesUseCase(movieRepository);

const useGetAllMoviesRequest = (port: IGetAllMoviePort) => {
    const callback = async (): Promise<IGetAllMovieDto> => {
        return useCase.execute(port)
    }
    return useQuery({queryFn: callback, queryKey: [QUERY_KEY.GET_ALL_MOVIE, port]})
}

export {useGetAllMoviesRequest}
