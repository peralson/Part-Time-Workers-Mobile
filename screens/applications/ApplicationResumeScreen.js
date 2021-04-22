// React
import React from 'react';

// React Native
import { StyleSheet, Text, View } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';

const ApplicationResumeScreen = ({ navigation, route }) => {
  const offerId = route.params.offerId;

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ApplicationResumeScreen;
