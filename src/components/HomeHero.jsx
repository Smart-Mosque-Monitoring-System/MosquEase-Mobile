import React from 'react'
import {Image, Text, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import style from '../ui/style'

const mosqueLogo = require('../../assets/pics/mosqueLogo.png')

const HomeHero = () => {
    return (
        <LinearGradient
            start={{x: 0, y: 0}} end={{x: 0, y: 1}}
            colors={['#0C6A39', '#1A503A', '#28353B']}
            className={'flex justify-center items-start w-full h-[20%] px-5'}
        >
            <View
                className={'flex flex-row justify-center items-center'}
            >
                <Image
                    source={mosqueLogo}
                    className={'w-[120px] h-[120px] mr-5'}
                />
                <View
                    className={'flex flex-col justify-center items-start max-w-[80%]'}
                >
                    <Text
                        className={'text-white text-lg mb-2'}
                        style={style.extraBold}
                    >
                        Musholla terdekat!
                    </Text>
                    <View
                        className={'flex flex-row justify-center items-center'}
                    >
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            color={'#fff'}
                            size={20}
                        />
                        <Text
                            className={'text-white text-sm ml-2'}
                            style={style.regular}
                        >
                            Di sekitar ITB
                        </Text>
                    </View>

                </View>

            </View>
        </LinearGradient>
    )
}

export default HomeHero