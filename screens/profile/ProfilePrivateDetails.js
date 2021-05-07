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
} from 'react-native';

// Libs
import moment from 'moment'
import countries from '../../libs/countries';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import * as profileActions from '../../store/actions/profile';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import ProfileItem from '../../components/profile/ProfileItem';
import InputContainer from '../../components/form/InputContainer';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import ErrorText from '../../components/form/ErrorText';
import OptionListInput from '../../components/form/OptionListInput';
import DatePicker from '../../components/form/DatePicker';

const ProfilePrivateDetails = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Vars
  const [nationality, setNationality] = useState(profile.legal.nationality);
  const [nationalityError, setNationalityError] = useState(null);

  const [dniFront, setDniFront] = useState(profile.legal.dni.front);
  const [dniFrontError, setDniFrontError] = useState(null);

  const [dniBack, setDniBack] = useState(profile.legal.dni.back);
  const [dniBackError, setDniBackError] = useState(null);

  const [dniExpiryDate, setDniExpiryDate] = useState(
    profile.legal.dni.expiryDate
  );
  const [dniExpiryDateError, setDniExpiryDateError] = useState(null);

  const [dniNumber, setDniNumber] = useState(profile.legal.dni.number);
  const [dniNumberError, setDniNumberError] = useState(null);

  const [ssNumber, setSsNumber] = useState(profile.legal.ssNumber);
  const [ssNumberError, setSsNumberError] = useState(null);

  const [bankAccount, setBankAccount] = useState(profile.bank.bankAccount);
  const [bankAccountError, setBankAccountError] = useState(null);

  const handleSubmit = async () => {
    console.log('ola');
    setIsLoading(true);

    const updateProfile = async () => {
      await dispatch(
        profileActions.updateProfileLegal(
          profile.id,
          nationality,
          dniFront,
          dniNumber,
          dniBack,
          dniExpiryDate,
          ssNumber,
          bankAccount
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
        title='Datos legales'
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
        <View style={{ marginHorizontal: 16 }}>
          <InputContainer>
            <Label>Nacionalidad</Label>
            <TouchableOpacity
              style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditListItem',
                  params: {
                    title: 'Selecciona nacionalidad',
                    placeholder: nationality,
                    options: countries,
                    onChange: setNationality,
                  },
                })
              }
            >
              <Text style={styles.textInput}>
                {nationality}
              </Text>
            </TouchableOpacity>
          </InputContainer>
          {profile.legal.dni.front && (
            <ProfileItem
              title='Imagen de DNI'
              content={profile.legal.dni.front}
            />
          )}
          <InputContainer>
            <Label>Número DNI</Label>
            <Input
              returnKeyType='next'
              placeholder={dniNumber}
              onChange={(text) => setDniNumber(text)}
              blur={() => {
                setDniNumberError(false);
                if (!dniNumber) return setDniNumberError(true);
              }}
              value={dniNumber}
            />
            {dniNumberError && <ErrorText>Campo obligatorio</ErrorText>}
          </InputContainer>
          <InputContainer>
            <Label>Fecha de caducidad del DNI</Label>
            {/* <DatePicker
              placeholder={dniExpiryDate}
              onChange={setDniExpiryDate}
            /> */}
            <TouchableOpacity
            style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditDate',
                  params: {
                    title: 'Selecciona fecha de caducidad',
                    onChange: setDniExpiryDate,
                    placeholder: dniExpiryDate
                  },
                })
              }
            >
              <Text style={styles.textInput}>{moment(dniExpiryDate).format('DD-MM-YYYY')}</Text>
            </TouchableOpacity>
          </InputContainer>
          <InputContainer>
            <Label>Nº Seguridad Social</Label>
            <Input
              returnKeyType='next'
              placeholder={ssNumber}
              onChange={(text) => setSsNumber(text)}
              blur={() => {
                setSsNumberError(false);
                if (!ssNumber) return setSsNumberError(true);
              }}
              value={ssNumber}
            />
            {ssNumberError && <ErrorText>Campo obligatorio</ErrorText>}
          </InputContainer>
          <InputContainer>
            <Label>Cuenta bancaria</Label>
            <Input
              returnKeyType='next'
              placeholder={bankAccount}
              onChange={(text) => setBankAccount(text)}
              blur={() => {
                setBankAccountError(false);
                if (!bankAccount) return setBankAccountError(true);
              }}
              value={bankAccount}
            />
            {bankAccountError && <ErrorText>Campo obligatorio</ErrorText>}
          </InputContainer>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  cta: {
    fontSize: Size.tiny,
    fontFamily: Family.normal,
    color: Colors.primary,
  },
  inputPage: {
    width: '100%',
    height: 60,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
  },
});

export default ProfilePrivateDetails;
