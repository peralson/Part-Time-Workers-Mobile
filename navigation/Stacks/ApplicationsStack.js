// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import ApplicationResume from '../../screens/applications/ApplicationResumeScreen'

const Stack = createStackNavigator()

const defaultStackOptions = {
    headerShown: false
}

const ApplicationsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="ApplicationResume" 
            component={ApplicationResume}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default ApplicationsStack