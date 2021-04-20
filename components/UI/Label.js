// React
import React from 'react'

// React Native
import { StyleSheet, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>

const styles = StyleSheet.create({
    label: {
        fontFamily: Family.bold,
        width: '100%',
        fontSize: Size.medium,
        marginBottom: 8,
        color: Colors.black
    },
})

export default Label