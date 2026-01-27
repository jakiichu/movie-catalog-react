import {CreateMoviesUseCase} from "@/domain/movies/use-case/create.ts";
import {movieRepository} from "@/data/singletone";
import type {ICreateMovieDto, ICreateMoviePort} from "@/domain/movies/interface";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/enum";


const useCase = new CreateMoviesUseCase(movieRepository);

const useCreateMoviesRequest = () => {

    const refetchClient = useQueryClient()

    const callback = async (port: ICreateMoviePort): Promise<ICreateMovieDto> => {
        return useCase.execute(port)
    }
    return useMutation({
        mutationFn: callback, onSuccess: async () => {
            await refetchClient.invalidateQueries({queryKey: [QUERY_KEY.GET_ALL_MOVIE]})
        }
    })
}

export {useCreateMoviesRequest}
