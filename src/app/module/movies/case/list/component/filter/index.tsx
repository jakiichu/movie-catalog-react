import type {ReactNode} from 'react';
import Autocomplete from "@/app/ui/autocomplete";
import {Controller} from "react-hook-form";
import type {IFilteredProps} from "../interface.ts";
import {genre} from "@/app/common/const";
import style from './index.module.scss'
import Input from "@/app/ui/input";
import Popover from "@/app/ui/popover";
import {DotsThreeOutlineIcon} from "@phosphor-icons/react";
import Button from "@/app/ui/button";

const MoviesListFilter = ({form: {control, register}}: IFilteredProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            <Popover
                trigger={<Button className={style.buttonPopover}>Фильтры<DotsThreeOutlineIcon weight='fill' size={32}/></Button>}>
                <div className={style.popoverList}>
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
                    <div className={style.doubleItems}>
                        <p>Дата создания</p>
                        <div>
                            <Input
                                placeholder='YYYY.MM.DD'
                                {...register('createdFrom')}
                            />
                            <Input
                                placeholder='YYYY.MM.DD'
                                {...register('createdTo')}
                            />
                        </div>
                    </div>
                    <div className={style.doubleItems}>
                        <p>Дата обновления</p>
                        <div>
                            <Input
                                placeholder='YYYY.MM.DD'
                                {...register('updatedFrom')}
                            />
                            <Input
                                placeholder='YYYY.MM.DD'
                                {...register('updatedTo')}
                            />
                        </div>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default MoviesListFilter;
