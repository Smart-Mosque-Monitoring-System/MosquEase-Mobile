import React from 'react'
import {Dimensions, Image, Text, View} from 'react-native'
import style from '../ui/style'
import {faDroplet, faPerson, faTemperatureHalf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const {width} = Dimensions.get('window');

const LiveUpdate = ({route}) => {
    const mosque = route.params.item;
    const data = [
        {
            id: 1,
            title: 'Kelembaban',
            value: '150',
            unit: 'mmHg',
            logo: <FontAwesomeIcon icon={faDroplet} color={'#0C6A39'} size={40}/>
        },
        {
            id: 2,
            title: 'Suhu',
            value: '27',
            unit: 'Celcius',
            logo: <FontAwesomeIcon icon={faTemperatureHalf} color={'#0C6A39'} size={40}/>
        },
        {
            id: 3,
            title: 'Kapasitas',
            value: '8',
            unit: `/ ${mosque.capacity}`,
            logo: <FontAwesomeIcon icon={faPerson} color={'#0C6A39'} size={40}/>
        }
    ]
    return (
        <View
            className={'flex flex-col items-center w-fit max-h-[60%]'}
        >
            <View
                className={'flex flex-row items-center justify-between w-full h-[10%]'}
            >
                <Text
                    className={'text-md'}
                    style={style.extraBold}
                >
                    LIVE UPDATE
                </Text>
                <Text
                    className={'text-[10px]'}
                    style={style.regular}
                >
                    Updated 2 minutes ago
                </Text>
            </View>
            <Image
                className={'w-full h-[60%] rounded-2xl'}
                source={require('../../assets/pics/slider1.png')}
            />
            <View
                className={'flex flex-row items-center justify-between w-full h-[20%] bg-[#EFF4EC] p-2 rounded-lg'}
            >
                {
                    data.map((item) => {
                        return (
                            <View
                                key={item.id}
                                className={'flex flex-row items-center w-[32%] h-full justify-start bg-white rounded-lg'}
                            >
                                {item.logo}
                                <View
                                    className={'w-full flex flex-col ml-2'}
                                >
                                    <Text
                                        className={'text-sm'}
                                        style={style.extraBold}
                                    >
                                        {item.value}
                                    </Text>
                                    <Text
                                        className={'text-[10px]'}
                                        style={style.regular}
                                    >
                                        {item.unit}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>


        </View>
    )
}

export default LiveUpdate