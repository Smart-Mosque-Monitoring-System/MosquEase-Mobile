import React from 'react';
import {View} from 'react-native';
import HomeHero from '../components/HomeHero';
import MosqueList from '../components/MosqueList';

function Home({navigation}) {
    return (
        <View
            className={'flex flex-col items-start bg-white w-full h-full'}
        >
            <View
                className={'w-full h-[5%] bg-[#0C6A39]'}
            />
            <HomeHero />
            <MosqueList
                navigation={navigation}
            />
        </View>
    );
}

export default Home;
