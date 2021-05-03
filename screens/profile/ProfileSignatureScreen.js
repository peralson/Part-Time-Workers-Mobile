// // React
// import React, { useState, useRef } from 'react';

// // React Native
// import { StyleSheet, Text, View, Button } from 'react-native';

// // Components
// import Screen from '../../components/UI/Screen';
// import HomeWrapper from '../../components/UI/HomeWrapper';
// import HeaderTitle from '../../components/UI/HeaderTitle';
// import BackButton from '../../components/UI/BackButton';


// export const ProfileSignatureScreen = () => {
//   const color = 0x0000ff;
//   const width = 5;
//   const alpha = 0.5;
//   return (
//     <Screen>
//       <HomeWrapper
//         leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
//         rightComponent={<HeaderTitle title='Firma digital' />}
//       />
//     </Screen>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 250,
//     padding: 10,
//   },
//   row: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     alignItems: 'center',
//   },
// });
// export default ProfileSignatureScreen;

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import ExpoPixi from 'expo-pixi';

export const ProfileSignatureScreen = () => {
  const color = 0x0000ff;
  const width = 5;
  const alpha = 0.5;
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        rightComponent={<HeaderTitle title='Firma digital' />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
export default ProfileSignatureScreen;
