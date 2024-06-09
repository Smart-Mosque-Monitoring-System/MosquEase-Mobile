import React from 'react';
import {View} from 'react-native';
import HomeHero from '../components/HomeHero';
import MosqueList from '../components/MosqueList';

function Home({navigation, route}) {
    const { mosque } = route.params;
    // console.log(route)
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
                mosqueData={mosque}
            />
        </View>
    );
}

export default Home;
