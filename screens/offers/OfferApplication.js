// React
import React, { useState } from 'react';

// React Native
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import * as applicationActions from '../../store/actions/applications';

// Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

// Components
import Screen from '../../components/UI/Screen';
import HomeWrapper from '../../components/UI/HomeWrapper';
import BackButton from '../../components/UI/BackButton';
import ApplyButton from '../../components/offers/ApplyButton';

const OfferApplication = ({ navigation }) => {
  const [height, setHeight] = useState(0);
  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={require('../../assets/application.png')}
      />
      <Text style={styles.title}>¡Has aplicado con éxito!</Text>
      <Text style={styles.description}>
        Si la empresa acepta la petición, esta oferta pasará al área de
        "proyectos"
      </Text>

      <View
        onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
        style={styles.bottomAbsolute}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home', { screen: 'Ofertas' })}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'gotham-bold',
    fontSize: 24,
    width: '40%',
    textAlign: 'center',
    marginBottom: '10%'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: '10%'
  },
  description: {
    width: '55%',
    textAlign: 'center',
    fontSize: Size.medium,
    color: Colors.darkGrey,
    marginBottom: '10%'
  },
  bottomAbsolute: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white,
    paddingBottom: Platform.OS === 'ios' ? 32 : 8,
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  button: {
    paddingVertical: 16,
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: Family.bold,
    fontSize: Size.tiny,
    color: Colors.darkPrimary,
  },
});

export default OfferApplication;
