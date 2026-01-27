import {GetOneMoviesUseCase} from "@/domain/movies/use-case/get-one.ts";
import {movieRepository} from "@/data/singletone";
import type {IGetOneMovieDto, IGetOneMoviePort} from "@/domain/movies/interface";
import {useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/enum";


const useCase = new GetOneMoviesUseCase(movieRepository);

const useGetOneMoviesRequest = (port?: IGetOneMoviePort) => {
    const callback = async (): Promise<IGetOneMovieDto> => {
        if (!port) throw new Error("Port is required");
        return useCase.execute(port)
    }
    return useQuery({queryFn: callback, queryKey: [QUERY_KEY.GET_ALL_MOVIE, port]})
}

export {useGetOneMoviesRequest}
