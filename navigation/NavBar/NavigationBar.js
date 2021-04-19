// React
import React from 'react'

// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import OffersHomeScreen from '../../screens/offers/OffersHomeScreen'
import ProfileHomeScreen from '../../screens/profile/ProfileHomeScreen'
import WorksHomeScreen from '../../screens/works/WorksHomeScreen'

// Components
import TabBar from './TabBar'

const Tab = createBottomTabNavigator()

const NavigationBar = () => (
    <Tab.Navigator initialRouteName="Ofertas" tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
            name="Ofertas" 
            component={OffersHomeScreen}
        />
        <Tab.Screen
            name="Trabajos"
            component={WorksHomeScreen}
        />
        <Tab.Screen
            name="Perfil"
            component={ProfileHomeScreen}
        />
    </Tab.Navigator>
)

export default NavigationBar