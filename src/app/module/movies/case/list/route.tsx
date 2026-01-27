import type {ReactNode} from 'react';
import {Outlet} from "react-router";
import DimWrapper from "@/app/ui/dim-wrapper";
import style from './index.module.scss'
import Search from "@/app/module/movies/case/list/component/search";
import AddMovies from "@/app/module/movies/case/list/component/add-movies";
import MoviesListFilter from "@/app/module/movies/case/list/component/filter";
import {useGetAllMoviesPresenter} from "@/app/module/movies/case/list/case/presenter.ts";
import MoviesList from "@/app/module/movies/case/list/component/list";
import {CircleNotchIcon} from "@phosphor-icons/react";
import type {IGetAllMovieDto} from "@/domain/movies/interface";

const Route = (): ReactNode => {
    const {data, isLoading = true, form} = useGetAllMoviesPresenter()

    return (
        <div className={style.wrapper}>
            <DimWrapper className={style.topBar}>
                <Search form={form}/>
                <MoviesListFilter form={form}/>

                <AddMovies/>
            </DimWrapper>
            <DimWrapper className={style.mainContent}>

                {/*Вроде логичней выглядит что можно поставить ! в начале, но уже привык что линтер настроен так что если можно написать без ! то напишу так*/}
                {isLoading ? <CircleNotchIcon className={style.circleLoading}/> :
                    <MoviesList data={data as IGetAllMovieDto}/>}


            </DimWrapper>
            <Outlet/>
        </div>
    );
};

export default Route;
