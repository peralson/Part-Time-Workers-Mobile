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

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Date Picker
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

// Constants
import Colors from '../../../constants/Colors';
import Size from '../../../constants/FontSize';
import Family from '../../../constants/FontFamily';

// Components
import Screen from '../../../components/UI/Screen';
import ToggleBottomMenu from '../../../components/UI/ToggleBottomMenu';
import Label from '../../../components/form/Label';
import FormWrapper from '../../../components/form/FormWrapper';
import HomeWrapper from '../../../components/UI/HomeWrapper';
import BackButton from '../../../components/UI/BackButton';

const ProfileEditDate = ({ navigation, route }) => {
  const { title, onChange, placeholder } = route.params;

  const [date, setDate] = useState(new Date(moment(placeholder)));
  const [show, setShow] = useState(false);

  const onShowDatePicker = () => {
    setShow((state) => !state);
  };

  const onSubmitHandler = async () => {
    if (!date) {
      Alert.alert('¡Selecciona una fecha!', [{ text: 'Entiendo' }]);
      return;
    }

    navigation.goBack();
  };

  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title={title}
      />
      <FormWrapper>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onShowDatePicker}
          style={{ marginVertical: 16 }}
        >
          <Text style={styles.dateText}>
            {moment(date).locale('es').format('DD-MM-YYYY')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onSubmitHandler}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </FormWrapper>
      {show && Platform.OS === 'ios' && (
        <ToggleBottomMenu onSelect={onShowDatePicker}>
          <DateTimePicker
            testID='dateTimePicker'
            locale='es-ES'
            mode='date'
            display='inline'
            value={date}
            onChange={(e, date) => {
              const m = moment(date);
              setDate(new Date(m));
              onChange(new Date(m));
              setShow(false);
            }}
          />
        </ToggleBottomMenu>
      )}
      {show && Platform.OS === 'android' && (
        <ToggleBottomMenu onSelect={onShowDatePicker}>
          <DateTimePicker
            testID='dateTimePicker'
            locale='es-ES'
            mode='date'
            value={date}
            onChange={(e, date) => {
              const m = moment(date);
              setDate(new Date(m));
              onChange(new Date(m));
              setShow(false);
            }}
          />
        </ToggleBottomMenu>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  dateText: {
    fontFamily: 'gotham-book',
    fontSize: 16,
    padding: 16,
    borderRadius: 4,
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.black,
    backgroundColor: 'white',
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

export default ProfileEditDate;
