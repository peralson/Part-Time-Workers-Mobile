// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import ApplicationResume from '../../screens/applications/ApplicationResumeScreen'
import ApplicationSuccess from '../../screens/applications/ApplicationSuccessScreen'
import ApplicationDetail from '../../screens/applications/ApplicationDetailScreen'

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
        <Stack.Screen
            name="ApplicationSuccess" 
            component={ApplicationSuccess}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ApplicationDetail" 
            component={ApplicationDetail}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default ApplicationsStack