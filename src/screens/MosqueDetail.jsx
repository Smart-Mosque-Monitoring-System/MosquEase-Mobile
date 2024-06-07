import React from 'react';
import {Text, View} from 'react-native';

function MosqueDetail() {
    return (
        <View
            className={'flex flex-col items-start bg-white w-full h-full'}
        >
            <Text
                className={'text-2xl text-green-500'}
                style={{fontFamily: 'Nunito-ExtraBold'}}
            >
                Mosque Detail Screen
            </Text>
        </View>
    );
}

export default MosqueDetail;
