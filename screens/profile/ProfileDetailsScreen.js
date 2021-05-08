// React
import React, { useState } from 'react';

// React Native
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Libs
import moment from 'moment'

// Redux
import { useDispatch } from 'react-redux';

// Actions
import * as profileActions from '../../store/actions/profile';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import ProfileItem from '../../components/profile/ProfileItem';
import ImagePicker from '../../components/UI/ImagePicker';
import SideScrollPicker from '../../components/UI/SideScrollPicker';
import MultilineInput from '../../components/form/MultilineInput';
import InputContainer from '../../components/form/InputContainer';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import ErrorText from '../../components/form/ErrorText';
import OptionListInput from '../../components/form/OptionListInput';
import DatePicker from '../../components/form/DatePicker';

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  //Vars
  const [name, setName] = useState(profile.name);
  const [nameError, setNameError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState(profile.contact.phoneNumber);
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const [email, setEmail] = useState(profile.contact.email);
  const [emailError, setEmailError] = useState(null);

  const [address, setAddress] = useState(profile.contact.address);
  const [lat, setLat] = useState(profile.contact.lat);
  const [lng, setLng] = useState(profile.contact.lng);

  const [birthday, setBirthday] = useState(profile.details.birthday);

  const [gender, setGender] = useState(profile.details.gender);

  const [bio, setBio] = useState(profile.details.bio);

  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

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
        title='Mi información'
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
        <Label style={{ paddingHorizontal: 16 }}>Fotografías</Label>
        <SideScrollPicker>
          <ImagePicker title='Personal' image={profile.images.main} />
          <ImagePicker title='Profesional' image={profile.images.profesional} />
        </SideScrollPicker>
        <View style={{ marginHorizontal: 16 }}>
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
            {/* <Input
              returnKeyType='next'
              placeholder={address}
              onChange={(text) => setAddress(text)}
              blur={() => {
                setAddressError(false);
                if (!address) return setAddressError(true);
              }}
              value={address}
            />
            {addressError && <ErrorText>Campo obligatorio</ErrorText>} */}
            <TouchableOpacity
            style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditDirection',
                  params: {
                    title: 'Selecciona dirección',
                    onChangeAddress: setAddress,
                    onChangeLat: setLat,
                    onChangeLng: setLng,
                    placeholder: address
                  },
                })
              }
            >
              <Text style={styles.textInput}>{address}</Text>
            </TouchableOpacity>
          </InputContainer>
          <InputContainer>
            <Label>Fecha de nacimiento</Label>
            <TouchableOpacity
            style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditDate',
                  params: {
                    title: 'Selecciona fecha de nacimiento',
                    onChange: setBirthday,
                    placeholder: birthday
                  },
                })
              }
            >
              <Text style={styles.textInput}>{moment(birthday).format('DD-MM-YYYY')}</Text>
            </TouchableOpacity>
          </InputContainer>
          <InputContainer>
            <Label>Género</Label>
            <TouchableOpacity
            style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditListItem',
                  params: {
                    placeholder: gender,
                    title: 'Selecciona género',
                    onChange: setGender,
                    options: ['Hombre', 'Mujer'],
                    values: ['male', 'female']
                  },
                })
              }
            >
              <Text style={styles.textInput}>{gender === 'male' ? 'Hombre' : 'Mujer'}</Text>
            </TouchableOpacity>
          </InputContainer>
        </View>
        <ProfileItem title='Biografía' />
        <MultilineInput placeholder={bio} onChange={() => setBio()} />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
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
  }
});

export default ProfileDetailsScreen;
