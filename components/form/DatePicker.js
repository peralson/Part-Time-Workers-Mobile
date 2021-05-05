// React
import React, { useState } from 'react';

// React Native
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Date Picker
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

//Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

const DatePicker = ({ placeholder, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateState, setDateState] = useState(new Date(moment(placeholder)));

  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <View style={styles.container}>
      {showDatePicker ? (
        <TouchableOpacity style={styles.date} onPress={handleShowDatePicker}>
          <DateTimePicker
            testID='dateTimePicker'
            locale='es-ES'
            mode='date'
            value={new Date(placeholder)}
            onChange={(date) => {
              const m = moment(date);
              onChange(new Date(m));
              setDateState(new Date(m));
              handleShowDatePicker();
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.date} onPress={handleShowDatePicker}>
          <Text style={styles.text}>
            {moment(dateState).format('DD-MM-YYYY')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
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
  text: {
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
  },
});

export default DatePicker;
