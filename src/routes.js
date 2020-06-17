import React from 'react'
import Jogo from './pages/jogo'
import Initial from './pages/initial'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator()

const routes = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Initial" component={Initial} options={{headerStatusBarHeight: 20, headerTitleAlign: 'center', headerTitle: 'Mines', headerStyle: {backgroundColor: '#c5c5c5'}}} />
                <stack.Screen name="Jogo" component={Jogo} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default routes