// React
import React, { useState } from 'react';

// React Native
import {
  Alert,
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
import TopRightButton from '../../../components/UI/TopRightButton';

const DirectionScreen = ({ navigation, route }) => {
  const apiKey = firebaseConfig.apiKey;
  const {
    title,
    onChangeLocation,
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
      onChangeLocation({
        address: address,
        lat: coords.lat,
        lng: coords.lng,
      });
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
        rightComponent={<TopRightButton title='Guardar' color={Colors.primary} onSelect={onSubmitHandler} />}
      />
        <GooglePlacesAutocomplete
          placeholder={address ? address : 'Eg. Puerta de Alcalá'}
          placeholderTextColor={Colors.white}
          styles={mapStyles}
          onPress={(data) => setAddress(data.description)}
          query={{
            key: apiKey,
            language: 'es',
            components: 'country:es',
          }}
        />
    </Screen>
  );
};

const mapStyles = {
  container: {
    marginTop: 16,
    marginHorizontal: 16
  },
  textInput: {
    borderRadius: 4,
    height: 55,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: Size.small,
    backgroundColor: Colors.white,
    fontFamily: Family.normal,
    borderColor: Colors.darkGrey,
    borderWidth: 1,
    color: Colors.darkPrimary,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: Colors.grey,
    borderTopWidth: 0.5,
  },
  row: {
    paddingVertical: 16,
    height: 48,
    flexDirection: 'row',
  },
  separator: {
    borderBottomColor: Colors.darkPrimary,
    borderBottomWidth: .5
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
}

export default DirectionScreen
