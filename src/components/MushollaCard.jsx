import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {style} from "../ui/style";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const MushollaCard = ({item, navigation}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MosqueDetail', {item: item})}
            className={'flex flex-row justify-between bg-[#EFF4EC] w-full h-20 px-3 my-2 rounded-xl border-[1px] border-[#91AE9E]'}
            style={style.card}
        >
            <View
                className={'flex flex-col justify-center'}
            >
                <Text
                    className={'text-md mb-1'}
                    style={{fontFamily: 'Nunito-Bold'}}
                >
                    {item.name}
                </Text>
                <View
                    className={'flex flex-row items-center'}
                >
                    <FontAwesomeIcon icon={faLocationDot} color={'#000'} size={20}/>
                    <Text
                        className={'text-xs'}
                        style={{fontFamily: 'Nunito'}}
                    >
                        {item.location.toString()}m
                    </Text>
                </View>
            </View>
            <View
                className={'flex flex-col justify-end mb-3'}
            >
                <Text
                    className={'text-xs'}
                    style={{fontFamily: 'Nunito'}}
                >
                    Kapasitas: {item.occupied} / {item.capacity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MushollaCard;

