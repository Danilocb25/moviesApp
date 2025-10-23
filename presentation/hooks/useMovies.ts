import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularAction } from "@/core/actions/movies/popular.action"
import { toRatedAction } from "@/core/actions/movies/topRated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    //Queries 
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    const popularQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: popularAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','topRated'],
        queryFn: ({ pageParam }) => {
            console.log({ pageParam })
            return toRatedAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (lastPage, Pages)=> Pages.length + 1
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies','upcoming'],
        queryFn: upcomingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }

}