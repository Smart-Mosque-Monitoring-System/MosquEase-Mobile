// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    useFonts
} from '@expo-google-fonts/nunito';

import HomePage from './src/screens/Home';
import MosqueDetailPage from './src/screens/MosqueDetail';
import NotFoundPage from './src/screens/NotFound';
import LoadingScreen from "./src/components/LoadingScreen";
import { supabase } from "./src/utils/supabase";

const Stack = createStackNavigator();

const App = () => {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_400Regular_Italic,
    });

    const [mosque, setMosque] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.rpc('get_mosque_data');
            if (error) {
                console.error(error);
            } else {
                setMosque(data);
                setDataLoaded(true);
            }
        };

        fetchData();
    }, []);

    if (!fontsLoaded || !dataLoaded) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} initialParams={{ mosque }} />
                <Stack.Screen name="MosqueDetail" component={MosqueDetailPage} />
                <Stack.Screen name="NotFound" component={NotFoundPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
