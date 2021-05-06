// React
import React, { useState } from 'react';

// React Native
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Switch,
} from 'react-native';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Redux
import { useDispatch } from 'react-redux';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import HeaderTitle from '../../components/UI/HeaderTitle';
import ErrorText from '../../components/form/ErrorText';
import InputContainer from '../../components/form/InputContainer';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import OptionListInput from '../../components/form/OptionListInput';

// Actions
import * as profileActions from '../../store/actions/profile';
import AppLoading from 'expo-app-loading';

const ProfileDrivingDetails = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Vars
  const [hasLicense, setHasLicense] = useState(profile.transport.hasLicense);
  const [hasLicenseError, setHasLicenseError] = useState(null);

  const [hasCar, setHasCar] = useState(profile.transport.hasCar);
  const [hasCarError, setHasCarError] = useState(null);

  const handleSubmit = async () => {
    console.log('ola');
    setIsLoading(true);

    const updateProfile = async () => {
      await dispatch(
        profileActions.updateProfileTransport(
          profile.id,
          hasLicense,
          hasCar
          // licenseType,
          // licenseFront,
          // licenseBack
        )
      );
      setIsLoading(false);
    };
    updateProfile();
  };

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title='Transporte'
        rightComponent={
          <TouchableOpacity onPress={handleSubmit}>
            {isLoading ? (
              <ActivityIndicator size='small' color={Colors.primary} />
            ) : (
              <Text style={styles.cta}>Guardar</Text>
            )}
          </TouchableOpacity>
        }
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.switchContainer}>
          <Label>Carnet de conducir</Label>
          <Switch
            trackColor={{ false: Colors.grey, true: Colors.darkGrey }}
            thumbColor={Colors.lightPrimary}
            ios_backgroundColor={Colors.grey}
            onValueChange={setHasLicense}
            value={hasLicense}
          />
        </View>

          <View style={styles.switchContainer}>
          <Label>Tengo coche</Label>
          <Switch
            trackColor={{ false: Colors.grey, true: Colors.darkGrey }}
            thumbColor={Colors.lightPrimary}
            ios_backgroundColor={Colors.grey}
            onValueChange={setHasCar}
            value={hasCar}
          />
          </View>

      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  cta: {
    fontSize: Size.tiny,
    fontFamily: Family.normal,
    color: Colors.primary,
  },
  switchContainer: {
    width: '100%',
    paddingRight: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  }
});

export default ProfileDrivingDetails;
