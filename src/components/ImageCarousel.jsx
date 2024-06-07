import React from 'react'
import {View, Image, Dimensions} from 'react-native'
// import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const ImageCarousel = ({images}) => {

    return (
        <View
            className={'w-full h-[20%]'}
        >
            {/*<Carousel*/}
            {/*    loop*/}
            {/*    width={width}*/}
            {/*    height={width / 5}*/}
            {/*    autoPlay={true}*/}
            {/*    data={images}*/}
            {/*    scrollAnimationDuration={1000}*/}
            {/*    onSnapToItem={(index) => console.log('current index:', index)}*/}
            {/*    renderItem={({ index }) => (*/}
            {/*        <Image*/}
            {/*            source={images[index]}*/}
            {/*            style={{ width: width, height: width / 5 }}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
        </View>
    )
}

export default ImageCarousel