import {DeleteMoviesUseCase} from "@/domain/movies/use-case/delete.ts";
import {movieRepository} from "@/data/singletone";
import type {IDeleteMovieDto, IDeleteMoviePort} from "@/domain/movies/interface";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEY} from "@/app/common/enum";


const useCase = new DeleteMoviesUseCase(movieRepository);

const useDeleteMoviesRequest = () => {

    const refetchClient = useQueryClient()

    const callback = async (port?: IDeleteMoviePort): Promise<IDeleteMovieDto> => {
        if (!port) throw new Error("Port is required");
        return useCase.execute(port)
    }
    return useMutation({
        mutationFn: callback, onSuccess: async () => {
            await refetchClient.invalidateQueries({queryKey: [QUERY_KEY.GET_ALL_MOVIE]})
        }
    })
}

export {useDeleteMoviesRequest}
