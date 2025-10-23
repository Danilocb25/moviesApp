import { Cast } from '@/infrastructure/interfaces/movie.interface'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AutorCard from './AutorCard'

interface Props {
  cast: Cast[]
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-32">
      <Text className='font-bold text-2xl px-4'> Actores </Text>

      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AutorCard
            actor={item}
          />
        )}
      />

    </View>
  )
}

export default MovieCast