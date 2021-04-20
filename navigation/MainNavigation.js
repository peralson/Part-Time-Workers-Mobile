// React
import React from 'react'

// React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'

// Navigation Components
import NavigationBar from './NavBar/NavigationBar'
import ProfileStack from './Stacks/ProfileStack'
import OffersStack from './Stacks/OffersStack'
import ApplicationsStack from './Stacks/ApplicationsStack'

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
        <Stack.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="OffersStack"
            component={OffersStack}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ApplicationsStack"
            component={ApplicationsStack}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

const MainNavigation = createSwitchNavigator({
    // Auth: AuthScreen,
    App: AppNavigation
})

export default createAppContainer(MainNavigation)