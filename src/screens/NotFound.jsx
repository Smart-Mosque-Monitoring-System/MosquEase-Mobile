import React from 'react';
import {Text, View} from "react-native";
import style from "../ui/style";

const NotFound = () => {
    return (
        <View
            className={'justify-center w-screen h-screen bg-white items-center'}>
            <Text
                className={'text-black text-center text-2xl'}
                style={style.extraBold}
            >
                404 Not Found
            </Text>
        </View>
    );
}

export default NotFound;