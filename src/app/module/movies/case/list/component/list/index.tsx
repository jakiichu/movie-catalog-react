import type {ReactNode} from 'react';
import type {IMoviesListProps} from "./interface.ts";
import style from './index.module.scss'
import DimWrapper from "@/app/ui/dim-wrapper";
import MoviesItemActions from "./component/actions";
import NoHaveItems from "@/app/module/movies/case/list/component/list/component/no-have-item";

const MoviesList = ({data}: IMoviesListProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            {data.length ? data.map((value) =>
                <DimWrapper key={value.id} className={style.item} color='additional'>
                    <div className={style.header}>
                        <h2>{value.title}</h2>
                        <MoviesItemActions id={value.id}/>
                    </div>

                    <p><strong>Год производства:</strong> {value.releaseYear}</p>
                    <p><strong>Жанр:</strong> {value.genre}</p>
                    {value.description && <p><strong>Описание:</strong> {value.description}</p>}
                    <p><strong>Режиссер:</strong> {value.director}</p>
                    <p><strong>Актеры:</strong></p>
                    <ul className={style.actors}>
                        {value.actors.map((actor, index) => (
                            <li key={`${value.id}-actor-${index}`}>{actor}</li>
                        ))}
                    </ul>

                    <p className={style.meta}>
                        <small>
                            Добавлен: {value.createdAt.toLocaleDateString()} |
                            Обновлён: {value.updatedAt.toLocaleDateString()}
                        </small>
                    </p>
                </DimWrapper>
            ) : <NoHaveItems/>}
        </div>
    );
};

export default MoviesList;
