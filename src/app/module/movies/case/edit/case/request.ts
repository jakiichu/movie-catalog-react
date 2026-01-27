import {UpdateMoviesUseCase} from "@/domain/movies/use-case/update.ts";
import {movieRepository} from "@/data/singletone";
import type {IUpdateMovieDto, IUpdateMoviePort} from "@/domain/movies/interface";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/enum";


const useCase = new UpdateMoviesUseCase(movieRepository);

const useUpdateMoviesRequest = () => {

    const refetchClient = useQueryClient()

    const callback = async (port: IUpdateMoviePort): Promise<IUpdateMovieDto> => {
        return useCase.execute(port)
    }
    return useMutation({
        mutationFn: callback, onSuccess: async () => {
            await refetchClient.invalidateQueries({queryKey: [QUERY_KEY.GET_ALL_MOVIE]})
        }
    })
}

export {useUpdateMoviesRequest}
