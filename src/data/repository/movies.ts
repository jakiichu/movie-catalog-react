import type {
    ICreateMovieDto,
    ICreateMoviePort,
    IDeleteMovieDto,
    IDeleteMoviePort,
    IGetAllMovieDto,
    IGetAllMoviePort,
    IMovieDatabase,
    IMovieRepository,
    IUpdateMovieDto,
    IUpdateMoviePort
} from "@/domain/movies/interface";

//I — Interface Segregation (Принцип разделения интерфейсов)
//S – Single Responsibility (Принцип единственной ответственности)
//Буквально все то же самое что и с db
class MovieRepository implements IMovieRepository {
    private database: IMovieDatabase

    constructor(database: IMovieDatabase) {
        //D — Dependency Inversion (Принцип инверсии зависимостей) ему не важно что сюда передаться главное чтоб оно подходило под интерфейс
        this.database = database;
    }

    getAll(port: IGetAllMoviePort): Promise<IGetAllMovieDto> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.database.getAll(port))
            }, 2000)
        })
    }

    update(port: IUpdateMoviePort): Promise<IUpdateMovieDto> {
        return new Promise((resolve) => {
            resolve(this.database.update(port.id, port))
        })
    }

    delete(port: IDeleteMoviePort): Promise<IDeleteMovieDto> {
        return new Promise((resolve) => {
            resolve(this.database.delete(port))
        })
    }

    create(port: ICreateMoviePort): Promise<ICreateMovieDto> {
        return new Promise((resolve) => {
            resolve(this.database.create(port))
        })
    }
}

export {MovieRepository}
