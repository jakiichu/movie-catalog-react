import type {IUpdateMoviePort} from "@/domain/movies/interface";
import {useForm} from "react-hook-form";
import {useUpdateMoviesRequest} from "./request.ts";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";
import {zodResolver} from "@hookform/resolvers/zod";
import {movieSchema} from "@/app/module/movies/form/schema.ts";
import {useEffect} from "react";

const useUpdateMoviesPresenter = (defaultValues?: IUpdateMoviePort) => {

    const form = useForm<IUpdateMoviePort>({
        resolver: zodResolver(movieSchema),
    })
    useEffect(() => {
        form.reset(defaultValues)
    }, [defaultValues])

    const {mutateAsync, ...props} = useUpdateMoviesRequest()

    const navigate = useNavigate();
    const onSuccess = async () => {
        setTimeout(() => navigate(ROUTER_PATH.movies), 0)
        form.reset()
    }

    const mutateWithReset = form.handleSubmit(async (port: IUpdateMoviePort) => {
        return mutateAsync({...port, updatedAt: new Date()}, {onSuccess})
    })

    return {form, mutateWithReset, ...props}
}

export {useUpdateMoviesPresenter}
