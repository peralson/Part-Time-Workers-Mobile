// React
import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens & Stacks
import ProfileDetails from '../../screens/profile/ProfileDetailsScreen';
import ProfileContracts from '../../screens/profile/ProfileContractsScreen';
import ProfilePayrolls from '../../screens/profile/ProfilePayrollsScreen';
import ProfilePrivateDetails from '../../screens/profile/ProfilePrivateDetails';
import ProfileDrivingDetails from '../../screens/profile/ProfileDrivingDetails';
import ProfileJobHistory from '../../screens/profile/ProfileJobHistory';
import ProfilePastJobDetails from '../../screens/profile/ProfilePastJobDetails';
import ProfileSignatureScreen from '../../screens/profile/ProfileSignatureScreen';
import ProfileListsScreen from '../../screens/profile/ProfileListsScreen';

//Edit Screens
import ProfileEditDate from '../../screens/profile/edit/ProfileEditDate';
import ProfileEditDirection from '../../screens/profile/edit/ProfileEditDirection';
import ProfileEditListItem from '../../screens/profile/edit/ProfileEditListItem';

const Stack = createStackNavigator();

const defaultStackOptions = {
  headerShown: false,
};

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='ProfileDetails'
      component={ProfileDetails}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileContracts'
      component={ProfileContracts}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfilePayrolls'
      component={ProfilePayrolls}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfilePrivateDetails'
      component={ProfilePrivateDetails}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileDrivingDetails'
      component={ProfileDrivingDetails}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileJobHistory'
      component={ProfileJobHistory}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfilePastJobDetails'
      component={ProfilePastJobDetails}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileSignatureScreen'
      component={ProfileSignatureScreen}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileListsScreen'
      component={ProfileListsScreen}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileEditDate'
      component={ProfileEditDate}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileEditDirection'
      component={ProfileEditDirection}
      options={defaultStackOptions}
    />
    <Stack.Screen
      name='ProfileEditListItem'
      component={ProfileEditListItem}
      options={defaultStackOptions}
    />
  </Stack.Navigator>
);

export default ProfileStack;
