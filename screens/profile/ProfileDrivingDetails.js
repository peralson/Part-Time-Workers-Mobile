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
  Alert,
} from 'react-native';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Expo
import { Ionicons } from '@expo/vector-icons';

// Libs
import * as vars from '../../libs/vars';
import { useFormik } from 'formik';

// Redux
import { connect } from 'react-redux';
import { updateProfileTransport } from '../../store/actions/profile';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import Label from '../../components/form/Label';
import ImagePickerComponent from '../../components/UI/ImagePickerComponent';
import SideScrollPicker from '../../components/UI/SideScrollPicker';

const ProfileDrivingDetails = ({
  navigation,
  route,
  updateProfileTransport
}) => {
  const { profile } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      hasLicense: profile.transport.hasLicense,
      hasCar: profile.transport.hasCar,
      type: profile.transport.license.type,
      front: profile.transport.license.front,
      back: profile.transport.license.back,
    },
    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        await updateProfileTransport(
          profile.id,
          values.hasLicense,
          values.hasCar,
          values.type,
          values.front,
          values.back
        );
      } catch (err) {
        Alert.alert(
          'Oh! Vaya...',
          err.message,
          [{ text: 'Okay' }]
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title='Transporte'
        rightComponent={
          <TouchableOpacity onPress={formik.submitForm}>
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
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.switchContainer}>
            <Label style={{ marginBottom: 0 }}>Carnet de conducir</Label>
            <Switch
              trackColor={{ false: Colors.grey, true: Colors.accent }}
              thumbColor={Colors.lightPrimary}
              ios_backgroundColor={Colors.grey}
              onValueChange={formik.handleChange('hasLicense')}
              value={formik.values.hasLicense}
            />
          </View>
        </View>
        {formik.values.hasLicense && (
          <>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.switchContainer}>
                <Label style={{ marginBottom: 0 }}>Tengo coche</Label>
                <Switch
                  trackColor={{ false: Colors.grey, true: Colors.accent }}
                  thumbColor={Colors.lightPrimary}
                  ios_backgroundColor={Colors.grey}
                  onValueChange={formik.handleChange('hasCar')}
                  value={formik.values.hasCar}
                />
              </View>

              <Label style={{ marginBottom: 12 }}>Tipo de licencia</Label>
              {formik.values.type.map((item, index) => (
                <View key={index} style={styles.licenseInput}>
                  <TouchableOpacity
                    style={styles.inputPage}
                    onPress={() =>
                      navigation.navigate('ProfileStack', {
                        screen: 'ProfileEditListItem',
                        params: {
                          placeholder: formik.values.type[index],
                          title: 'Selecciona tipo de licencia',
                          onChange: formik.handleChange(`type[${index}]`),
                          options: vars.licenses,
                        },
                      })
                    }
                  >
                    <Text style={styles.textInput}>
                      {formik.values.type[index]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      formik.values.type = formik.values.type.filter(
                        (item) => item !== formik.values.type[index]
                      );
                      formik.setFormikState({
                        ...formik,
                        ...(formik.values.type = formik.values.type.filter(
                          (item) => item !== formik.values.type[index]
                        )),
                      });
                    }}
                  >
                    <Ionicons
                      name='trash-outline'
                      size={14}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity
                style={styles.addLicenseType}
                onPress={() => {
                  const newIndex = formik.values.type.length;
                  console.log(formik.values.type);
                  navigation.navigate('ProfileStack', {
                    screen: 'ProfileEditListItem',
                    params: {
                      placeholder: formik.values.type[newIndex],
                      title: 'Selecciona tipo de licencia',
                      onChange: formik.handleChange(`type[${newIndex}]`),
                      options: vars.licenses,
                    },
                  });
                }}
              >
                <Text style={styles.addLicenseTypeButton}>Añadir licencia</Text>
              </TouchableOpacity>
              <Label>Carnet de conducir</Label>
            </View>
            <SideScrollPicker>
              <ImagePickerComponent
                title='Imagen Frontal'
                placeholder={formik.values.front}
                onChange={formik.handleChange('front')}
              />
              <ImagePickerComponent
                title='Imagen trasera'
                placeholder={formik.values.back}
                onChange={formik.handleChange('back')}
              />
            </SideScrollPicker>
          </>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  cta: {
    fontSize: Size.tiny,
    fontFamily: Family.normal,
    color: Colors.primary,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  licenseInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    padding: 16
  },
  inputPage: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
  },
  addLicenseType: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 24
  },
  addLicenseTypeButton: {
    color: Colors.primary,
    fontFamily: Family.normal,
    fontSize: Size.small,
    lineHeight: 21
  }
});

const mapDispatchToProps = {
  updateProfileTransport
}

export default connect(null, mapDispatchToProps)(ProfileDrivingDetails);
