import React from 'react'
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import style from '../ui/style'
import MushollaCard from "./MushollaCard";

const MosqueList = ({navigation, mosqueData}) => {
    const mosqueArray = Array.isArray(mosqueData) ? mosqueData : Object.values(mosqueData);

    return (
        <SafeAreaView style={{flex: 1, paddingTop: 20, paddingHorizontal: 20}}>
            <View
                className={'flex flex-row justify-between items-center bg-transparent w-full max-h-[10%]'}
            >
                <Text
                    className={'text-black text-sm'}
                    style={style.bold}
                >
                    Musholla di dekatmu
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NotFound')}
                    className={'bg-[#0C6A39] px-5 py-2 rounded-lg'}
                >
                    <Text
                        className={'text-white text-xs'}
                        style={style.bold}
                    >
                        Ubah Lokasi
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={mosqueArray}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <MushollaCard
                        item={item}
                        navigation={navigation}
                    />
                )}
                ListEmptyComponent={() => (
                    <View>
                        <Text>No data available</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )

}

export default MosqueList