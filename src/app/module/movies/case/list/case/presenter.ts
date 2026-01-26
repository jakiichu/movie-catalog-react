import type {IGetAllMoviesForm} from "@/domain/movies/interface";
import {useGetAllMoviesRequest} from "@/app/module/movies/case/list/case/request.ts";
import {useForm} from "react-hook-form";

const useGetAllMoviesPresenter = () => {
    const form = useForm<IGetAllMoviesForm>({
        defaultValues: {}
    })

    const {data, ...props} = useGetAllMoviesRequest({})

    return {data, form, ...props}
}

export {useGetAllMoviesPresenter}
