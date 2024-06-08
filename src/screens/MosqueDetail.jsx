import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DetailHero from "../components/DetailHero";
import {useRoute} from '@react-navigation/native';
import style from '../ui/style';

const slider1 = require('../../assets/pics/slider1.png');
const slider2 = require('../../assets/pics/slider2.png');
const slider3 = require('../../assets/pics/slider3.png');

const images =
    [
        slider1,
        slider2,
        slider3,
    ];

const MosqueDetail = ({navigation}) => {
    const route = useRoute();
    return (
        <View
            className={'flex flex-col items-start bg-[#EFF4EC] w-full h-full'}
        >
            <View
                className={'w-full h-[5%] bg-[#0C6A39]'}
            />
            <Image
                className={'w-full max-h-[20%]'}
                source={slider1}
                style={{width: '100%', height: 200}}
            />

            <View
                className={'bg-white h-full'}
            >
                <DetailHero
                    navigation={navigation}
                    route={route}
                />
                </View>
        </View>
    );
}

export default MosqueDetail;
