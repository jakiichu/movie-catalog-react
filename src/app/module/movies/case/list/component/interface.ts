import type {UseFormReturn} from "react-hook-form";
import type {IGetAllMoviesForm} from "@/domain/movies/interface";


interface IFilteredProps {
    form: UseFormReturn<IGetAllMoviesForm, unknown, IGetAllMoviesForm>
}

export type {
    IFilteredProps
}
