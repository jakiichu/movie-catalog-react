import type {ICreateMoviePort} from "@/domain/movies/interface";
import {useForm} from "react-hook-form";
import {useCreateMoviesRequest} from "@/app/module/movies/case/create/case/request.ts";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";
import {zodResolver} from "@hookform/resolvers/zod";
import {movieSchema} from "@/app/module/movies/form/schema.ts";

const useCreateMoviesPresenter = () => {
    const form = useForm<ICreateMoviePort>({
        defaultValues: {
            id: crypto.randomUUID(),
            title: '',
            genre: '',
            releaseYear: '',
            director: '',
            actors: [],
            description: '',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        resolver: zodResolver(movieSchema),
    })

    const {mutateAsync, ...props} = useCreateMoviesRequest()

    const navigate = useNavigate();
    const onSuccess = async () => {
        // Тут не просто так тайм-аут а чтоб в макротаску засунуть навигацию(чтоб только после запроса закрылась модалка)
        setTimeout(() => navigate(ROUTER_PATH.movies), 0)
        form.reset()
    }

    const mutateWithReset = form.handleSubmit(async (port: ICreateMoviePort) => {
        return mutateAsync(port, {onSuccess})
    })

    return {form, mutateWithReset, ...props}
}

export {useCreateMoviesPresenter}
