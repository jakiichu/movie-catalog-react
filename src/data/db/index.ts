import type {IGetAllMovieDto} from "@/domain/movies/interface/dto.ts";
import {dbInitialState} from "@/data/db/const.ts";
import type {IMovieEntity} from "@/domain/movies/interface";
import type {IGetAllMoviesForm} from "@/domain/movies/interface/form.ts";
import type {IMovieDatabase} from "@/domain/movies/interface/database.ts";

//I — Interface Segregation (Принцип разделения интерфейсов)
//S – Single Responsibility (Принцип единственной ответственности)
//дб предоставляет публичное апи, а как с ней уже будут работать ее не волнует это значит что он подходит под описание единой ответственности
class Database implements IMovieDatabase {
    //O — Open-Closed (Принцип открытости-закрытости)
    private _db: IGetAllMovieDto = dbInitialState;

    create(IGetAllMovie: IMovieEntity) {
        this._db.push(IGetAllMovie);
    }

    delete(id: string) {
        this._db = this._db.filter(i => i.id !== id);
    }

    update(id: string, update: IMovieEntity) {
        this._db = this._db.map(i => i.id === id ? update : i);
    }

    getAll(params: IGetAllMoviesForm) {
        let result = [...this._db];

        // Как хорошо что есть бекендер и мне не приходится вот такими извращениями заниматься... (fullstack)

        if (params.genre) {
            result = result.filter(
                movie => movie.genre.toLowerCase() === params.genre!.toLowerCase()
            );
        }

        if (params.releaseYear) {
            result = result.filter(
                movie => movie.releaseYear === params.releaseYear
            );
        }

        if (params.createdFrom) {
            result = result.filter(
                movie => movie.createdAt >= params.createdFrom!
            );
        }

        if (params.createdTo) {
            result = result.filter(
                movie => movie.createdAt <= params.createdTo!
            );
        }

        if (params.updatedFrom) {
            result = result.filter(
                movie => movie.updatedAt >= params.updatedFrom!
            );
        }

        if (params.updatedTo) {
            result = result.filter(
                movie => movie.updatedAt <= params.updatedTo!
            );
        }

        if (params.search && params.search.trim().length >= 3) {
            const search = params.search.toLowerCase();

            result = result.filter(movie =>
                movie.title.toLowerCase().includes(search) ||
                movie.director.toLowerCase().includes(search) ||
                movie.description?.toLowerCase().includes(search) ||
                movie.actors.some(actor =>
                    actor.toLowerCase().includes(search)
                )
            );
        }

        return result;
    }

}

export default Database;
