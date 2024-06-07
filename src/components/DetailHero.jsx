import React from 'react'
import {Dimensions, Text, TouchableOpacity, View} from 'react-native'
import style from '../ui/style'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

import LiveUpdate from "./LiveUpdate";
import Facilities from "./Facilities";

const {width} = Dimensions.get('window');

const DetailHero = ({navigation, route}) => {
    const mosque = route.params.item
    return (
        <>
            <View
            className={'flex flex-col max-w-[90%] h-[75%] mx-5 mt-1'}
        >
            <Text
                className={'text-2xl'}
                style={style.bold}
            >
                {mosque.name}
            </Text>
            <View
                className={'flex flex-row items-center'}
            >
                <FontAwesomeIcon
                    icon={faLocationDot}
                    color={'#1A503A'}
                    size={20}
                />
                <Text
                    className={'text-xs m-1'}
                    style={style.regular}
                >
                    {mosque.location.toString()} meter dari lokasimu
                </Text>
            </View>
            <View
                style={style.hr}
            />
            <LiveUpdate
                route={route}
            />
            <View
                style={style.hr}
            />
            <Facilities
                route={route}
            />
        </View>
        </>
    )
}

export default DetailHero