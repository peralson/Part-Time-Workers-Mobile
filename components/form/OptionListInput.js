// React
import React, { useState } from 'react';

// React Native
import { Platform, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

//Constants
import Colors from '../../constants/Colors';
import Family from '../../constants/FontFamily';
import Size from '../../constants/FontSize';

//Components
import FormWrapper from './FormWrapper'

const OptionListInput = ({
  placeholder,
  options,
  onChange,
  values
}) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);

  return (
    <>
      {Platform.OS === 'android' ? (
        <FormWrapper>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => {
                setSelectedValue(itemValue);
                onChange(itemValue);
              }}
              style={styles.form}
              itemStyle={styles.item}
            >
              {options.map((option) => (
                <Picker.Item
                  label={option}
                  value={values ? values[options.indexOf(option)] : option}
                  key={option}
                  style={{ textDecorationColor: Colors.white }}
                />
              ))}
            </Picker>
          </View>
        </FormWrapper>
      ) : (
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
              onChange(itemValue);
            }}
            style={styles.form}
            itemStyle={styles.item}
          >
            {options.map((option) => (
              <Picker.Item
                label={option}
                value={values ? values[options.indexOf(option)] : option}
                key={option}
                style={{ textDecorationColor: Colors.white }}
              />
            ))}
          </Picker>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 16
  },
  form: {
    width: '100%',
    height: '100%',
    fontFamily: Family.normal,
    fontSize: Size.small,
    color: Colors.white,
  },
  item: {
    fontFamily: Family.normal,
    fontSize: Size.medium,
    color: Colors.white,
  },
});

export default OptionListInput;
