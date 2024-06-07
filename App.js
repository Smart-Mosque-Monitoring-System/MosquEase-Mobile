import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
    useFonts,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_400Regular_Italic
} from '@expo-google-fonts/nunito';

import HomePage from './src/screens/Home';
import MosqueDetailPage from './src/screens/MosqueDetail';
import NotFoundPage from './src/screens/NotFound';
import LoadingScreen from "./src/components/LoadingScreen";

const Stack = createStackNavigator();

const mosqueData =
    [
        {
            id: '1',
            name: 'Masjid Al-Haram',
            location: 49,
            occupied: 10,
            capacity: 20,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
        {
            id: '2',
            name: 'Masjid An-Nabawi',
            location: 20,
            occupied: 10,
            capacity: 50,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
        {
            id: '3',
            name: 'Masjid Al-Aqsa',
            location: 30,
            occupied: 10,
            capacity: 100,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
        {
            id: '4',
            name: 'Masjid Istiqlal',
            location: 43,
            occupied: 10,
            capacity: 200,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
        {
            id: '5',
            name: 'Masjid Raya Bandung',
            location: 25,
            occupied: 10,
            capacity: 150,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
        {
            id: '6',
            name: 'Masjid Salman ITB',
            location: 25,
            occupied: 10,
            capacity: 100,
            address: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132'
        },
    ]

const App = () => {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_400Regular_Italic,
    });

    if (!fontsLoaded) {
        return <LoadingScreen/>;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} options={{title: "Home"}} initialParams={mosqueData}/>
                <Stack.Screen name="MosqueDetail" component={MosqueDetailPage} options={{title: "MosqueDetail"}}/>
                <Stack.Screen name={"NotFound"} component={NotFoundPage} options={{title: "Not Found"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
