import Database from "@/data/db";
import {MovieRepository} from "@/data/repository/movies.ts";

const database = new Database()

 
const movieRepository = new MovieRepository(database)


export {movieRepository}
