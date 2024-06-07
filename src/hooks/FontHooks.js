import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useFonts = async () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Nunito': require('../../assets/fonts/Nunito-Medium.ttf'),
                'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
                'Nunito-ExtraBold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    return fontsLoaded;
};

export default useFonts;