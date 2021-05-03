// React
import React from 'react'

// React Native
import { StyleSheet, TextInput } from 'react-native'

//COnstants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const MultilineInput = props => (
    <TextInput
        {...props}
        textAlignVertical="top"
        style={styles.textInput}
        multiline
        onBlur={props.blur}
        onChangeText={props.onChange}
        placeholderTextColor={Colors.darkGrey}
    />
)

const styles = StyleSheet.create({
    textInput: {
        fontFamily: Family.normal,
        fontSize: Size.medium,
        padding: 16,
        borderRadius: 4,
        borderColor: Colors.grey,
        color: Colors.white,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        lineHeight: 26,
        height: 160,
        marginHorizontal: 16,
        marginBottom: 60
    }
})

export default MultilineInput