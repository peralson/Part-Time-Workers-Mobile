// React
import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Stacks
import ProfileDetails from '../../screens/profile/ProfileDetailsScreen'
import ProfileContracts from '../../screens/profile/ProfileContractsScreen'
import ProfilePayrolls from '../../screens/profile/ProfilePayrollsScreen'
import ProfilePrivateDetails from '../../screens/profile/ProfilePrivateDetails'
import ProfileDrivingDetails from '../../screens/profile/ProfileDrivingDetails'
import ProfileJobHistory from '../../screens/profile/ProfileJobHistory'
import ProfilePastJobDetails from '../../screens/profile/ProfilePastJobDetails'
import ProfileSignatureScreen from '../../screens/profile/ProfileSignatureScreen'

const Stack = createStackNavigator()

const defaultStackOptions = {
    headerShown: false
}

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="ProfileDetails"
            component={ProfileDetails}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfileContracts" 
            component={ProfileContracts}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfilePayrolls" 
            component={ProfilePayrolls}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfilePrivateDetails" 
            component={ProfilePrivateDetails}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfileDrivingDetails" 
            component={ProfileDrivingDetails}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfileJobHistory" 
            component={ProfileJobHistory}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfilePastJobDetails" 
            component={ProfilePastJobDetails}
            options={defaultStackOptions}
        />
        <Stack.Screen
            name="ProfileSignatureScreen" 
            component={ProfileSignatureScreen}
            options={defaultStackOptions}
        />
    </Stack.Navigator>
)

export default ProfileStack