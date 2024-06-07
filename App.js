import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontProvider} from "./src/contexts/FontContext";

import HomePage from './src/screens/Home';
import MosqueDetailPage from './src/screens/MosqueDetail';
import NotFoundPage from './src/screens/NotFound';

const Stack = createStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} options={{title: "Home"}}/>
                <Stack.Screen name="MosqueDetail" component={MosqueDetailPage} options={{title: "MosqueDetail"}}/>
                <Stack.Screen name={"NotFound"} component={NotFoundPage} options={{title: "Not Found"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function AppContainer() {
    return (
        <FontProvider>
            <App/>
        </FontProvider>
    );
}
