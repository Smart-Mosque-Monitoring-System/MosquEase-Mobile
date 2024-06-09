import React from 'react';
import {Image, View} from 'react-native';
import DetailHero from "../components/DetailHero";
import {useRoute} from '@react-navigation/native';

const mosqueDetailPic = require('../../assets/pics/mosqueDetailPic.jpg');

const MosqueDetail = ({navigation}) => {
    const route = useRoute();
    return (
        <View
            className={'flex flex-col items-start bg-[#EFF4EC] w-full h-full'}
        >
            <View
                className={'w-full h-[4.1%] bg-[#0C6A39]'}
            />
            <Image
                className={'w-full max-h-[20%]'}
                source={mosqueDetailPic}
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
