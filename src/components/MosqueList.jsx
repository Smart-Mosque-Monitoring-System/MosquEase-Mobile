import * as React from 'react'
import {FlatList, View} from 'react-native'

// const mosqueimg_1 = require('../../assets/pics/mosqueimg_1.png')
// const mosqueimg_2 = require('../../assets/pics/mosqueimg_2.png')
// const mosqueimg_3 = require('../../assets/pics/mosqueimg_3.png')


// const images = [mosqueimg_1, mosqueimg_2, mosqueimg_3]

const mosqueData =
    [
        {
            id: '1',
            name: 'Masjid Al-Haram',
            location: 'Makkah, Saudi Arabia',
            capacity: 20,
        },
        {
            id: '2',
            name: 'Masjid An-Nabawi',
            location: 'Madinah, Saudi Arabia',
            capacity: 50,
        },
        {
            id: '3',
            name: 'Masjid Al-Aqsa',
            location: 'Jerusalem',
            capacity: 100
        }
    ]

const MosqueList = ({navigation}) => {
    return (
        <View style={{flex: 1, paddingTop: 40}}>
            <FlatList
                data={mosqueData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

}

export default MosqueList