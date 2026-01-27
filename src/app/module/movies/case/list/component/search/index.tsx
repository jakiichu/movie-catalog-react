import type {ReactNode} from 'react';
import Input from "@/app/ui/input";
import IconButton from "@/app/ui/icon-button";
import {MagnifyingGlassIcon} from "@phosphor-icons/react";
import style from './index.module.scss'
import type {IFilteredProps} from "../interface.ts";

const Search = ({form}: IFilteredProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            <Input {...form.register('search')} placeholder='Поиск...'/>
            <IconButton><MagnifyingGlassIcon/></IconButton>
        </div>
    );
};

export default Search;
