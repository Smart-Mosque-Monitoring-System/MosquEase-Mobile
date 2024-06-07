import React from 'react'
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

import MushollaCard from './MushollaCard'

// const mosqueimg_1 = require('../../assets/pics/mosqueimg_1.png')
// const mosqueimg_2 = require('../../assets/pics/mosqueimg_2.png')
// const mosqueimg_3 = require('../../assets/pics/mosqueimg_3.png')


// const images = [mosqueimg_1, mosqueimg_2, mosqueimg_3]

const mosqueData =
    [
        {
            id: '1',
            name: 'Masjid Al-Haram',
            location: 49,
            occupied: 10,
            capacity: 20,
        },
        {
            id: '2',
            name: 'Masjid An-Nabawi',
            location: 20,
            occupied: 10,
            capacity: 50,
        },
        {
            id: '3',
            name: 'Masjid Al-Aqsa',
            location: 30,
            occupied: 10,
            capacity: 100
        },
        {
            id: '4',
            name: 'Masjid Istiqlal',
            location: 43,
            occupied: 10,
            capacity: 200
        },
        {
            id: '5',
            name: 'Masjid Raya Bandung',
            location: 25,
            occupied: 10,
            capacity: 150
        },
        {
            id: '6',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100
        },
        {
            id: '7',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100
        },
        {
            id: '8',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100
        },
        {
            id: '9',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100
        },
        {
            id: '10',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100
        }
    ]

const MosqueList = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 20, paddingHorizontal: 20}}>
            <View
                className={'flex flex-row justify-between items-center bg-transparent w-full max-h-[10%]'}
            >
                <Text
                    className={'text-black text-sm'}
                    style={{fontFamily: 'Nunito-Bold'}}
                >
                    Musholla di dekatmu
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NotFoundPage')}
                    className={'bg-[#0C6A39] px-5 py-2 rounded-lg'}
                >
                    <Text
                        className={'text-white text-xs'}
                        style={{fontFamily: 'Nunito-Bold'}}
                    >
                        Ubah Lokasi
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={mosqueData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <MushollaCard
                        item={item}
                        navigation={navigation}
                    />
                )}
            />
        </SafeAreaView>
    )

}

export default MosqueList