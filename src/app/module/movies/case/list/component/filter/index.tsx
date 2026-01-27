import type {ReactNode} from 'react';
import Autocomplete from "@/app/ui/autocomplete";
import {Controller} from "react-hook-form";
import type {IFilteredProps} from "../interface.ts";
import {genre} from "@/app/common/const";
import style from './index.module.scss'
import Input from "@/app/ui/input";

const MoviesListFilter = ({form: {control, register}}: IFilteredProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            <Controller
                name="genre"
                control={control}
                rules={{required: 'Выберите жанр'}}
                render={({field, fieldState}) => (
                    <>
                        <Autocomplete
                            {...field}
                            onSelect={field.onChange}
                            options={genre}
                            placeholder="Жанр"
                        />
                        {fieldState.error && (
                            <span style={{color: 'red'}}>
                                {fieldState.error.message}
                            </span>
                        )}
                    </>
                )}
            />

            <Input placeholder='Дата выпуска' {...register("releaseYear")}/>
        </div>
    );
};

export default MoviesListFilter;
