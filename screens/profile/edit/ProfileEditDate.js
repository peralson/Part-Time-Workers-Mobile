// React
import React, { useState, useEffect } from 'react';

// React Native
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

// Date Picker
import moment from 'moment';
import 'moment/locale/es'
import DateTimePicker from '@react-native-community/datetimepicker';

// Constants
import Colors from '../../../constants/Colors';
import Size from '../../../constants/FontSize';
import Family from '../../../constants/FontFamily';

// Components
import Screen from '../../../components/UI/Screen';
import ToggleBottomMenu from '../../../components/UI/ToggleBottomMenu';
import FormWrapper from '../../../components/form/FormWrapper';
import HomeWrapper from '../../../components/UI/HomeWrapper';
import BackButton from '../../../components/UI/BackButton';
import TopRightButton from '../../../components/UI/TopRightButton';

const ProfileEditDate = ({ navigation, route }) => {
  const { title, onChange, placeholder } = route.params;

  const [date, setDate] = useState(new Date(moment(placeholder)));
  const [show, setShow] = useState(false);

  const onShowDatePicker = () => setShow(state => !state);

  const onSubmitHandler = async () => {
    if (!date) {
      Alert.alert('¡Selecciona una fecha!', [{ text: 'Entiendo' }]);
      return;
    }

    navigation.goBack();
  };
  useEffect(() => {
    setShow(false)
    console.log('hola')
  }, [date])
  return (
    <Screen>
      <HomeWrapper
        leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
        title={title}
        rightComponent={Platform.OS === 'ios' ? (
          <TopRightButton
            title='Guardar'
            color={Colors.primary}
            onSelect={onSubmitHandler}
          />
        ) : null}
      />
      {Platform.OS === 'android' ? (
        <FormWrapper>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onShowDatePicker}
            style={styles.dateContainer}
          >
            <Text style={styles.dateText}>
              {moment(date).format('DD-MM-YYYY')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onSubmitHandler}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
          {show && (
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
        </FormWrapper>
      ) : (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onShowDatePicker}
            style={styles.dateContainer}
          >
            <Text style={styles.dateText}>
              {moment(date).format('DD-MM-YYYY')}
            </Text>
          </TouchableOpacity>
          {show && (
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
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  dateContainer: {
    padding: 16,
    backgroundColor: Colors.grey,
    marginTop: 8,
    borderRadius: 4,
  },
  dateText: {
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
    lineHeight: 24
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
