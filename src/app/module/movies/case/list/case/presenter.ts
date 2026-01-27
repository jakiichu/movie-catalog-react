import type {IGetAllMoviesForm} from "@/domain/movies/interface";
import {useGetAllMoviesRequest} from "@/app/module/movies/case/list/case/request.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {MoviesFiltersManager} from "@/app/utils/filters-manager.ts";

const moviesFiltersManager = new MoviesFiltersManager();

const useGetAllMoviesPresenter = () => {

    const defaultValues = moviesFiltersManager.getAll()

    const form = useForm<IGetAllMoviesForm>({
        defaultValues
    })


    useEffect(() => {
        moviesFiltersManager.setMany(form.watch() as Partial<Record<string, unknown>>)
    }, [form.watch()])

    const {data, ...props} = useGetAllMoviesRequest(form.watch())

    return {data, form, ...props}
}

export {useGetAllMoviesPresenter}
