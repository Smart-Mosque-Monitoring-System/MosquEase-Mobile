import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontProvider} from "./src/contexts/FontContext";

import HomePage from './src/screens/Home';
import MosqueDetailPage from './src/screens/MosqueDetail';

const Stack = createStackNavigator();

function App() {
    return (
        <FontProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomePage} options={{title: "Home"}}/>
                    <Stack.Screen name="MosqueDetail" component={MosqueDetailPage} options={{title: "MosqueDetail"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </FontProvider>
    );
}

export default App;
