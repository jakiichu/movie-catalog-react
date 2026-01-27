import type {ReactNode} from 'react';
import type {IMovieEntity, IUpdateMoviePort} from "@/domain/movies/interface";
import {useParams} from "react-router";
import {useGetOneMoviesPresenter} from "@/app/module/movies/case/get-one/case/presenter.ts";
import MoviesDataWrapper from "@/app/module/movies/case/edit/component/data-wrapper";

const Route = (): ReactNode => {
    const {id} = useParams<Readonly<Pick<IUpdateMoviePort, 'id'>>>();

    const {data, isLoading} = useGetOneMoviesPresenter(id)

    return !isLoading && <MoviesDataWrapper data={data as IMovieEntity}/>
};

export default Route;
