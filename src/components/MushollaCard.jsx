import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {style} from "../ui/style";

const MushollaCard = ({item, navigation}) => {
    return (
        <View
            className={'flex flex-row justify-between items-center bg-[#EFF4EC] w-full h-20 px-2 my-2 rounded-xl border-[1px] border-[#91AE9E]'}
            style={style.card}
        >
            <View
                className={'flex flex-col justify-center items-center'}
            >
                <Text
                    className={'text-lg font-bold'}
                >
                    {item.name}
                </Text>
                <Text
                    className={'text-sm'}
                >
                    {item.location}
                </Text>
            </View>
            <View
                className={'flex flex-col justify-center items-center'}
            >
                <Text
                    className={'text-lg font-bold'}
                >
                    {item.capacity}
                </Text>
                <Text
                    className={'text-sm'}
                >
                    Kapasitas
                </Text>
            </View>
            <View
                className={'flex flex-col justify-center items-center'}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('MosqueDetail', {item})}
                    className={'bg-[#0C6A39] px-5 py-2 rounded-lg'}
                >
                    <Text
                        className={'text-white'}
                    >
                        Detail
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MushollaCard;

