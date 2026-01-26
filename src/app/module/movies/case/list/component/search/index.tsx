import type {ReactNode} from 'react';
import Input from "@/app/ui/input";
import IconButton from "@/app/ui/icon-button";
import {MagnifyingGlassIcon} from "@phosphor-icons/react";
import style from './index.module.scss'
const Search = (): ReactNode => {
    return (
        <div className={style.wrapper}>
            <Input placeholder='Поиск...' />
            <IconButton><MagnifyingGlassIcon /></IconButton>
        </div>
    );
};

export default Search;
