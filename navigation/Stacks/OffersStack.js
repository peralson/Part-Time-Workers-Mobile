// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import OfferDetails from '../../screens/offers/OfferDetailsScreen'
import Map from '../../screens/offers/MapScreen'
import PDF from '../../screens/offers/PDFScreen'

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
        <Stack.Screen
            name="Map" 
            component={Map}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="PDF" 
            component={PDF}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default OffersStack