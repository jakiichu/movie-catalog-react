import Database from "@/data/db";
import {MovieRepository} from "@/data/repository/movies.ts";

//Одиночка — это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.

const database = new Database()


const movieRepository = new MovieRepository(database)


export {movieRepository}
