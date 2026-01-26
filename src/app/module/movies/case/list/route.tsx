import type {ReactNode} from 'react';
import {Outlet} from "react-router";
import DimWrapper from "@/app/ui/dim-wrapper";
import style from './index.module.scss'
import Search from "@/app/module/movies/case/list/component/search";
import AddMovies from "@/app/module/movies/case/list/component/add-movies";

const Route = (): ReactNode => {
    return (
        <div className={style.wrapper}>
            <DimWrapper className={style.topBar}>
                <Search/>
                <AddMovies/>
            </DimWrapper>
            <DimWrapper className={style.mainContent}></DimWrapper>
            <Outlet/>
        </div>
    );
};

export default Route;
