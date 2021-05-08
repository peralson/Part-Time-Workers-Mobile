// React
import React, { useState } from 'react';

// React Native
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

// Constants
import Colors from '../../../constants/Colors';
import Size from '../../../constants/FontSize';
import Family from '../../../constants/FontFamily';

// MapsInput
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import firebaseConfig from '../../../env';

// Components
import HomeWrapper from '../../../components/UI/HomeWrapper';
import BackButton from '../../../components/UI/BackButton';
import Screen from '../../../components/UI/Screen';
import FormWrapper from '../../../components/form/FormWrapper';

const DirectionScreen = ({ navigation, route }) => {
  const apiKey = firebaseConfig.apiKey;
  const {
    title,
    onChangeAddress,
    onChangeLat,
    onChangeLng,
    placeholder,
  } = route.params;

  const [address, setAddress] = useState(placeholder);

  const onSubmitHandler = async () => {
    if (!address) {
      Alert.alert('La dirección es obligatoria', [{ text: 'Okay' }]);
      return;
    }

    const geocoding = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=
            ${address}&key=${apiKey}`
    );

    const geoData = await geocoding.json();

    try {
      const coords = geoData.results[0].geometry.location;
      onChangeAddress(address);
      onChangeLat(coords.lat);
      onChangeLng(coords.lng);
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'La dirección es inválida',
        'Prueba a introducir otra o sé más especifico introduciendo la calle y el número',
        [{ text: 'Okay' }]
      );
    }
  };

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title={title}
      />
      <FormWrapper>
        <GooglePlacesAutocomplete
          placeholder={address ? address : 'Eg. Puerta de Alcalá'}
          styles={mapStyles}
          onPress={(data) => {
            console.log(data);
            setAddress(data.description);
          }}
          query={{
            key: apiKey,
            language: 'es',
            components: 'country:es',
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onSubmitHandler}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </FormWrapper>
    </Screen>
  );
};

const mapStyles = {
  container: {
    marginTop: 8,
  },
  textInput: {
    borderRadius: 4,
    height: 55,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: 'gotham-book',
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.black,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: Colors.grey,
    borderTopWidth: 0.5,
  },
  row: {
    padding: 8,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: Colors.grey,
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: Colors.accent,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: Size.medium,
    fontFamily: Family.bold,
    color: Colors.white,
    lineHeight: 24,
  },
});

export default DirectionScreen;
