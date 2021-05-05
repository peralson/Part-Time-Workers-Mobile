// React
import React, {useState} from 'react';

// React Native
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

//Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

const OptionListInput = ({ placeholder, options, onChange, values }) => {
  console.log(values)
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={placeholder}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
        style={styles.form}
      >
        {options.map((option) => (
          <Picker.Item
            label={option}
            value={values ? values[options.indexOf(option)] : option}
            key={option}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  form: {
    width: '100%',
    height: '100%',
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
  },
});


export default OptionListInput;
