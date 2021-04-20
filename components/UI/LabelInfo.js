// React
import React from 'react'

// React Native
import { StyleSheet, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const LabelInfo = ({ children }) => <Text style={styles.labelInfo}>{children}</Text>

const styles = StyleSheet.create({
    labelInfo: {
        fontFamily: Family.normal,
        lineHeight: 23,
        fontSize: Size.small,
        color: Colors.darkGrey,
        marginBottom: 8
    },
})

export default LabelInfo