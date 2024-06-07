import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    regular: {
        fontFamily: 'Nunito_400Regular',
    },
    bold: {
        fontFamily: 'Nunito_700Bold',
    },
    extraBold: {
        fontFamily: 'Nunito_800ExtraBold',
    },
    regit: {
        fontFamily: 'Nunito_400Regular_Italic',
    },
    hr: {
        height: 1,
        backgroundColor: '#2C6262',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
})

export default style;