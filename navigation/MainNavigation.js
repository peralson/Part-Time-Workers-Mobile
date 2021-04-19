// React
import React from 'react'

// React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'

// Navigation Components
import NavigationBar from './NavBar/NavigationBar'

// Other Screens

// Tab & Stack declarations
const Stack = createStackNavigator()

const defaultStackOptions = {
    headerShown: false
}

const AppNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={NavigationBar}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

const MainNavigation = createSwitchNavigator({
    // Auth: AuthScreen,
    App: AppNavigation
})

export default createAppContainer(MainNavigation)