// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import OfferDetails from '../../screens/offers/OfferDetailsScreen'

const Stack = createStackNavigator()

const defaultStackOptions = {
    headerShown: false
}

const OffersStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="OfferDetails" 
            component={OfferDetails}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default OffersStack