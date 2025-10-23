import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api";

export const upcomingAction = async() =>{
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie ) ;     
        return movies

    } catch (error) {
        console.log(error)
        throw 'Problemas al obtener datos';
    }
}
 