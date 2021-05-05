// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import WorkDetail from '../../screens/works/WorkDetailScreen'

const Stack = createStackNavigator()

const defaultStackOptions = {
    headerShown: false
}

const WorksStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="WorkDetail" 
            component={WorkDetail}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default WorksStack