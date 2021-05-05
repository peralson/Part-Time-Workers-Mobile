// React
import React, { useState, useCallback } from 'react';

// React Native
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';

// React Redux
import { useSelector } from 'react-redux';

// Constants
import Colors from '../../constants/Colors';

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
        rightComponent={<HeaderTitle title='Transporte' />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 16 }}>
          <InputContainer>
            <Label>Carnet de conducir</Label>
            <OptionListInput
              placeholder={hasLicense}
              options={['Sí', 'No']}
              values={[true, false]}
              onChange={setHasLicense}
            />
          </InputContainer>
          <InputContainer>
            <Label>Tengo coche</Label>
            <OptionListInput
              placeholder={hasCar}
              options={['Sí', 'No']}
              values={[true, false]}
              onChange={setHasCar}
            />
          </InputContainer>
          
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          {isLoading ? (
            <Text style={styles.buttonText}>Guardando...</Text>
          ) : (
            <Text style={styles.buttonText}>Guardar cambios</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  buttonContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 24,
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'gotham-bold',
    color: Colors.white,
  },
});

export default ProfileDrivingDetails;
