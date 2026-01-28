import type {UseFormReturn} from "react-hook-form";
import type {ICreateMovieForm} from "@/domain/movies/interface";
import type {BaseSyntheticEvent} from "react";

interface IMoviesFormProps {
    onSubmit: (e?: BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>
    form: UseFormReturn<ICreateMovieForm, unknown, ICreateMovieForm>
    textButton: string
    isPending: boolean
}

export type {IMoviesFormProps}
