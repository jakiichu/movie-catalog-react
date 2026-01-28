import type {ReactNode} from 'react';
import Input from "@/app/ui/input";
import style from './index.module.scss'
import type {IFilteredProps} from "../interface.ts";
import MoviesListFilter from "@/app/module/movies/case/list/component/filter";

const Search = ({form}: IFilteredProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            <Input {...form.register('search')} placeholder='Поиск...'/>
            <MoviesListFilter form={form}/>
        </div>
    );
};

export default Search;
