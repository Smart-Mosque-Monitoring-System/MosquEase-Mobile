import React from 'react'
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native'
import style from '../ui/style'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const {width} = Dimensions.get('window');

const Facilities = ({route}) => {
    const mosque = route.params.item
    const facilities = [
        {
            id: 1,
            title: 'Sajadah',
        },
        {
            id: 2,
            title: 'Al-Quran',
        },
        {
            id: 3,
            title: 'Mukenah',
        },
        {
            id: 4,
            title: 'Toilet',
        },
        {
            id: 5,
            title: 'Wudhu',
        },
        {
            id: 6,
            title: 'AC',
        }
    ]
    return (

        <View
            className={'flex flex-col items-start w-full h-[20%]'}
        >
            <Text
                className={'text-lg'}
                style={style.extraBold}
            >
                FASILITAS
            </Text>
            <Text
                className={'text-xs text-black text-justify'}
                style={style.regular}
            >
                {mosque.address}
            </Text>
            <View
                className={'flex flex-row items-center justify-between w-full max-h-[20%] mt-2'}
            >
                {
                    <FlatList
                        data={facilities}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (
                            <View
                                className={'flex flex-row items-center justify-start p-1.5 m-1 w-[30%] h-full'}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    color={'#0C6A39'}
                                    size={20}
                                />
                                <Text
                                    className={'text-xs ml-2'}
                                    style={style.regular}
                                >
                                    {item.title}
                                </Text>
                            </View>
                        )}
                        numColumns={3}
                    />
                }
            </View>

        </View>
    )
}

export default Facilities