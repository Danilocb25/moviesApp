import { useEffect, useRef } from 'react'
import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'


interface Props {
    title?: string;
    movies: Movie[];

    loadNextPage?: () => void
}

const MovieHorizontalList = ({movies, title, loadNextPage }:Props) => {

    const isLoading = useRef(false)

    useEffect(()=>{
        isLoading.current = false
    },[movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{
        if(isLoading.current) return

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

        if(!isEndReached) return;

        isLoading.current = true;

        console.log(' cargar de nuevo las peliculas')
        loadNextPage && loadNextPage()

    }


  return (
    <View className='mb-5'> 
        { title &&  <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>  }

        <FlatList
            horizontal
            data={movies}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => `${item.id} - ${i}`}
            renderItem={({item})=>(
                <MoviePoster id={item.id} poster={item.poster} smallPoster/>
            )}
            onScroll={onScroll}
        />

    </View>
  )
}

export default MovieHorizontalList