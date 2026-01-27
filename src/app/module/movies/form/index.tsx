import type {ReactNode} from 'react';
import type {IMoviesFormProps} from "./interface.ts";
import Input from "@/app/ui/input";
import {Controller} from "react-hook-form";
import Autocomplete from "@/app/ui/autocomplete";
import {genre} from "@/app/common/const";
import MultiAdd from "@/app/ui/multiInput";
import style from './index.module.scss'
import Button from "@/app/ui/button";

const MoviesForm = ({form, onSubmit, textButton}: IMoviesFormProps): ReactNode => {
    return (
        <form onSubmit={onSubmit} className={style.form}>
            <Input placeholder='Название'
                   errorMessage={form.formState.errors.title?.message}
                   {...form.register("title")}/>
            <Controller
                name="genre"
                control={form.control}
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

            <Input placeholder='Год выпуска'
                   errorMessage={form.formState.errors.releaseYear?.message} {...form.register("releaseYear")}></Input>
            <Input placeholder="Директор"
                   errorMessage={form.formState.errors.director?.message} {...form.register("director")}></Input>
            <Controller
                name="actors"
                control={form.control}
                rules={{required: true}}
                render={({field, fieldState}) => (
                    <>
                        <MultiAdd
                            {...field}
                            placeholder="Актёры"
                        />
                        {fieldState.error && (
                            <span style={{color: 'red'}}>
                                {fieldState.error.message}
                            </span>
                        )}
                    </>
                )}
            />
            <Input placeholder='Описание'
                   errorMessage={form.formState.errors.description?.message}
                   {...form.register("description")}></Input>

            <Button type='submit'>{textButton}</Button>
        </form>
    );
};

export default MoviesForm;
