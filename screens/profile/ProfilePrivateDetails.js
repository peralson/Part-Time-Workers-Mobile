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
import moment from 'moment';
import countries from '../../libs/countries';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import * as profileActions from '../../store/actions/profile';

// Form
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import ProfileItem from '../../components/profile/ProfileItem';
import InputContainer from '../../components/form/InputContainer';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import ErrorText from '../../components/form/ErrorText';
import CustomInputComponent from '../../components/form/CustomInputComponent';

const ProfilePrivateDetails = ({ navigation, route }) => {
  const { profile } = route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      nationality: profile.legal.nationality,
      dniFront: profile.legal.dni.dniFront,
      dniNumber: profile.legal.dni.number,
      dniBack: profile.legal.dni.dniBack,
      dniExpiryDate: profile.legal.dni.expiryDate,
      ssNumber: profile.legal.ssNumber,
      bankAccount: profile.bank.bankAccount,
    },
    onSubmit: (values) => {
      setIsLoading(true);

      const updateProfile = async () => {
        await dispatch(
          profileActions.updateProfileLegal(
            profile.id,
            values.nationality,
            values.dniFront,
            values.dniNumber,
            values.dniBack,
            values.dniExpiryDate,
            values.ssNumber,
            values.bankAccount
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
        title='Datos legales'
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
          <InputContainer>
            <Label>Nacionalidad</Label>
            <TouchableOpacity
              style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditListItem',
                  params: {
                    title: 'Selecciona nacionalidad',
                    placeholder: formik.values.nationality,
                    options: countries,
                    onChange: formik.handleChange('nationality'),
                  },
                })
              }
            >
              <Text style={styles.textInput}>{formik.values.nationality}</Text>
            </TouchableOpacity>
          </InputContainer>
          {formik.values.dniFront && (
            <ProfileItem
              title='Imagen de DNI'
              content={formik.values.dniFront.front}
            />
          )}
          <CustomInputComponent
            onChange={formik.handleChange('dniNumber')}
            value={formik.values.dniNumber}
            label='Número de DNI'
          />
          <InputContainer>
            <Label>Fecha de caducidad del DNI</Label>
            <TouchableOpacity
              style={styles.inputPage}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ProfileEditDate',
                  params: {
                    title: 'Selecciona fecha de caducidad',
                    onChange: formik.handleChange('dniExpiryDate'),
                    placeholder: formik.values.dniExpiryDate,
                  },
                })
              }
            >
              <Text style={styles.textInput}>
                {moment(formik.values.dniExpiryDate).format('DD-MM-YYYY')}
              </Text>
            </TouchableOpacity>
          </InputContainer>
          <CustomInputComponent
            onChange={formik.handleChange('ssNumber')}
            value={formik.values.ssNumber}
            label='Nº Seguridad Social'
          />
          <CustomInputComponent
            onChange={formik.handleChange('bankAccount')}
            value={formik.values.bankAccount}
            label='Cuenta bancaria'
          />
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
