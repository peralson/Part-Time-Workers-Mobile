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

// Libs
import moment from 'moment';
import 'moment/locale/es';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import HeaderTitle from '../../components/UI/HeaderTitle';
import ProfileItem from '../../components/profile/ProfileItem';
import ImagePicker from '../../components/UI/ImagePicker';
import SideScrollPicker from '../../components/UI/SideScrollPicker';
import MultilineInput from '../../components/form/MultilineInput';
import InputContainer from '../../components/form/InputContainer';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import ErrorText from '../../components/form/ErrorText'
import OptionListInput from '../../components/form/OptionListInput';

// Actions
import * as profileActions from '../../store/actions/profile';

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Vars
  const [name, setName] = useState(profile.name);
  const [nameError, setNameError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState(profile.contact.phoneNumber);
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const [email, setEmail] = useState(profile.contact.email);
  const [emailError, setEmailError] = useState(null);

  const [address, setAddress] = useState(profile.contact.address);
  const [addressError, setAddressError] = useState(null);

  const [birthday, setBirthday] = useState(profile.details.birthday);
  const [birthdayError, setBirthdayError] = useState(null);

  const [gender, setGender] = useState(profile.details.gender);
  const [genderError, setGenderError] = useState(null);

  const [bio, setBio] = useState(profile.details.bio);

  const handleSubmit = async () => {
    console.log('ola');
    setIsLoading(true);

    const updateProfile = async () => {
      await dispatch(
        profileActions.updateProfileGeneral(
          profile.id,
          name,
          phoneNumber,
          email,
          address,
          gender,
          birthday,
          bio
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
        rightComponent={<HeaderTitle title='Mi información' />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ProfileItem title='Fotografías' />
        <SideScrollPicker>
          <ImagePicker title='Personal' image={profile.images.main} />
          <ImagePicker title='Profesional' image={profile.images.profesional} />
        </SideScrollPicker>
        <View style={{marginHorizontal: 16}}>
        <InputContainer>
          <Label>Nombre</Label>
          <Input
            returnKeyType='next'
            placeholder={name}
            onChange={(text) => setName(text)}
            blur={() => {
              setNameError(false);
              if (!name) return setNameError(true);
            }}
            value={name}
          />
          {nameError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Número de teléfono</Label>
          <Input
            returnKeyType='next'
            keyboardType='numeric'
            placeholder={phoneNumber}
            onChange={(num) => setPhoneNumber(num)}
            blur={() => {
              setPhoneNumberError(false);
              if (!phoneNumber) return setPhoneNumberError(true);
            }}
            value={phoneNumber}
          />
          {phoneNumberError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input
            returnKeyType='next'
            placeholder={email}
            onChange={(text) => setEmail(text)}
            blur={() => {
              setEmailError(false);
              if (!email) return setEmailError(true);
            }}
            value={email}
          />
          {emailError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Dirección</Label>
          <Input
            returnKeyType='next'
            placeholder={address}
            onChange={(text) => setAddress(text)}
            blur={() => {
              setAddressError(false);
              if (!address) return setAddressError(true);
            }}
            value={address}
          />
          {addressError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Fecha de nacimiento</Label>
          <Input
            returnKeyType='next'
            placeholder={moment(birthday).format('DD-MM-YYYY')}
            onChange={(text) => setBirthday(text)}
            blur={() => {
              setBirthdayError(false);
              if (!birthday) return setBirthdayError(true);
            }}
            value={birthday}
          />
          {birthdayError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Género</Label>
          {/* <Input
            returnKeyType='next'
            placeholder={gender}
            onChange={(text) => setGender(text)}
            blur={() => {
              setGenderError(false);
              if (!gender) return setGenderError(true);
            }}
            value={gender}
          /> */}
          <OptionListInput options={['Hombre', 'Mujer']} onChange={() => setGender()}/>
          {genderError && <ErrorText>Campo obligatorio</ErrorText>}
        </InputContainer>
        </View>
        <ProfileItem title='Biografía' />
        <MultilineInput placeholder={bio} onChange={() => setBio()} />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          {isLoading ? (
            <ActivityIndicator size={18} color={Colors.white} />
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
    paddingVertical: 16,
  },
  buttonContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 24,
    marginHorizontal: 16
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'gotham-bold',
    color: Colors.white,
  },
});

export default ProfileDetailsScreen;
