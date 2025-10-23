import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { } from 'react-native-gesture-handler';

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={40} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>

        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

        {/* carrucel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Populares */}
        <MovieHorizontalList movies={popularQuery.data ?? []} title='Populares' />

        {/* mejor calificadas */}
        <MovieHorizontalList 
          movies={topRatedQuery.data?.pages.flat() ?? []} 
          title='Mejor Calificadas' 
          loadNextPage={ topRatedQuery.fetchNextPage }
          />

        {/* Proximamente */}
        <MovieHorizontalList movies={upcomingQuery.data ?? []} title='Próximamente'/>

        <MovieHorizontalList movies={upcomingQuery.data ?? []}/>
        <MovieHorizontalList movies={upcomingQuery.data ?? []}/>


      </View>
    </ScrollView>
  )
}

export default HomeScreen