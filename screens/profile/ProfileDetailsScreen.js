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
import moment from 'moment';

// Redux
import { useDispatch } from 'react-redux';

// Form
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

// Actions
import * as profileActions from '../../store/actions/profile';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import ImagePicker from '../../components/UI/ImagePicker';
import SideScrollPicker from '../../components/UI/SideScrollPicker';
import MultilineInput from '../../components/form/MultilineInput';
import InputContainer from '../../components/form/InputContainer';
import Label from '../../components/form/Label';
import CustomInputComponent from '../../components/form/CustomInputComponent';

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      phoneNumber: profile.contact.phoneNumber,
      email: profile.contact.email,
      address: profile.contact.address,
      lat: profile.contact.lat,
      lng: profile.contact.lng,
      birthday: profile.details.birthday,
      gender: profile.details.gender,
      bio: profile.details.bio,
    },
    onSubmit: (values) => {
      setIsLoading(true);

      const updateProfile = async () => {
        await dispatch(
          profileActions.updateProfileGeneral(
            profile.id,
            values.name,
            values.phoneNumber,
            values.email,
            values.address,
            values.gender,
            values.birthday,
            values.bio
          )
        );
        setIsLoading(false);
      };

      updateProfile();
    },
  });

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title='Mi información'
        rightComponent={
          <TouchableOpacity onPress={formik.handleSubmit}>
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
          <SideScrollPicker>
            <ImagePicker title='Personal' image={profile.images.main} />
            <ImagePicker
              title='Profesional'
              image={profile.images.profesional}
            />
          </SideScrollPicker>
          <CustomInputComponent
            onChange={formik.handleChange('name')}
            value={formik.values.name}
            label='Nombre'
          />
          <CustomInputComponent
            onChange={formik.handleChange('phoneNumber')}
            value={formik.values.phoneNumber}
            label='Numero de teléfono'
          />
          <CustomInputComponent
            onChange={formik.handleChange('email')}
            value={formik.values.email}
            label='Email'
          />
          <InputContainer>
            <Label>Dirección</Label>
            <TouchableOpacity
              style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditDirection',
                  params: {
                    title: 'Selecciona dirección',
                    onChangeAddress: formik.handleChange('address'),
                    onChangeLat: formik.handleChange('lat'),
                    onChangeLng: formik.handleChange('lng'),
                    placeholder: formik.values.address,
                  },
                })
              }
            >
              <Text style={styles.textInput}>{formik.values.address}</Text>
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
                    onChange: formik.handleChange('birthday'),
                    placeholder: formik.values.birthday,
                  },
                })
              }
            >
              <Text style={styles.textInput}>
                {moment(formik.values.birthday).format('DD-MM-YYYY')}
              </Text>
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
                    placeholder: formik.values.gender,
                    title: 'Selecciona género',
                    onChange: formik.handleChange('gender'),
                    options: ['Hombre', 'Mujer'],
                    values: ['male', 'female'],
                  },
                })
              }
            >
              <Text style={styles.textInput}>
                {formik.values.gender === 'male' ? 'Hombre' : 'Mujer'}
              </Text>
            </TouchableOpacity>
          </InputContainer>
          <Label>Biografía</Label>
          <MultilineInput
            placeholder={formik.values.bio}
            onChange={() => formik.handleChange('bio')}
          />
        </View>
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
  },
});

export default ProfileDetailsScreen;
