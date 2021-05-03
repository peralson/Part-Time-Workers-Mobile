// React
import React from 'react'

// React Native
import { StyleSheet, TextInput } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const Input = props => (
    <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        onBlur={props.blur}
        placeholderTextColor={Colors.darkGrey}
        {...props}
    />
)

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.grey,
        fontFamily: Family.normal,
        fontSize: Size.medium,
        color: Colors.white,
    },
});

export default Input;
