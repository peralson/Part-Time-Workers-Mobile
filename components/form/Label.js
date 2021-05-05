// React
import React from 'react'

// React Native
import { StyleSheet, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const Label = ({ children, style }) => <Text style={{...styles.label, ...style}}>{children}</Text>

const styles = StyleSheet.create({
    label: {
        fontFamily: Family.bold,
        width: '100%',
        fontSize: Size.small,
        marginBottom: 8,
        color: Colors.white,
        lineHeight: 21
    },
})

export default Label
