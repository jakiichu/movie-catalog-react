import type {IGetAllMoviesForm} from "@/domain/movies/interface";
import {useGetAllMoviesRequest} from "@/app/module/movies/case/list/case/request.ts";
import {useForm, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {MoviesFiltersManager} from "@/app/utils/filters-manager.ts";
import {useDebounce} from "@/app/utils/use-debounce.ts";

const moviesFiltersManager = new MoviesFiltersManager();

const useGetAllMoviesPresenter = () => {
    const defaultValues = moviesFiltersManager.getAll();

    const form = useForm<IGetAllMoviesForm>({
        defaultValues,
    });

    const watchedValues = useWatch({
        control: form.control,
    });

    const debouncedValues = useDebounce(watchedValues, 500);

    useEffect(() => {
        moviesFiltersManager.setMany(
            debouncedValues as Partial<Record<string, unknown>>
        );
    }, [debouncedValues]);

    const {data, ...props} = useGetAllMoviesRequest(debouncedValues);

    return {data, form, ...props};
};

export {useGetAllMoviesPresenter};
