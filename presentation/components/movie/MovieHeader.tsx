import { router, useNavigation } from 'expo-router';
import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import MovieCast from './MovieCast';

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({ originalTitle, poster, title }: Props) => {

    const { height } = useWindowDimensions();

    // const navigation = useNavigation()

    return (
        <>
            <LinearGradient
                start={[0,0]}
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                style={{
                    height: height * 0.4,
                    position: 'absolute',
                    zIndex: 1,
                    width:'100%'
                }}
            />

            {/* boton de regreso */}
            <View style={{
                position: "absolute",
                zIndex: 99,
                elevation: 9,
                top: 35,
                left: 10,
            }}>
                <Pressable
                    // onPress={() => navigation.goBack()}
                    onPress={() => router.dismiss()}
                >
                    <Ionicons
                        name='arrow-back'
                        size={30}
                        color='white'
                        className="shadow"
                    />
                </Pressable>
            </View>


            <View
                style={{ height: height * 0.7 }}
                className='shadow-xl shadow-black/20'
            >
                <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image
                        className='flex-1'
                        source={{ uri: poster }}
                        resizeMode='cover'
                    />
                </View>

                <View className='px-5 mt-5'>
                    <Text className='font-normal'>{originalTitle}</Text>
                    <Text className='font-semibold'>{title}</Text>
                </View>

            </View>

        </>
    )
}

export default MovieHeader