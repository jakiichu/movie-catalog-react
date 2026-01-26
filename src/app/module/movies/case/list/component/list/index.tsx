import type {ReactNode} from 'react';
import type {IMoviesListProps} from "./interface.ts";
import style from './index.module.scss'
import DimWrapper from "@/app/ui/dim-wrapper";

const MoviesList = ({data}: IMoviesListProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            {data.map((value) => <DimWrapper key={value.id} className={style.item} color='additional'>
                <p>{value.title}</p>
                <p>
                    Год производства: {value.releaseYear}
                </p>
                <p>Жанр: {value.genre}</p>
            </DimWrapper>)}
        </div>
    );
};

export default MoviesList;
