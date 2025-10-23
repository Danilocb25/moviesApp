import { View, Text, useWindowDimensions } from 'react-native'
import Carrousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}


const MainSlideshow = ({ movies }: Props) => {

  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width

  return (
    <View className='h-[250px] w-full'>
      <Carrousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            poster={item.poster}
            // smallPoster
          />)}
        width={150 + 50}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow