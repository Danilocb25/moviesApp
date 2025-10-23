
import { Cast } from "@/infrastructure/interfaces/movie.interface";
import { movieApi } from "../../api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.Mapper";

export const getMovieCastAction = async( movieId:number ) => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);  
        
        return data.cast.map(CastMapper.fromMovieDBCastToEntity);

    } catch (error) {
        console.log(error)
        throw 'Problemas al obtener datos';
    }
}
 