// React
import React from 'react'

// React Native
import { StyleSheet, TextInput } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const Input = props => <TextInput style={styles.input} onChangeText={props.onChange} onBlur={props.blur} {...props} />

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.grey,
        fontFamily: Family.normal,
        fontSize: Size.medium,
        marginTop: 8,
        color: Colors.black
    }
})

export default Input