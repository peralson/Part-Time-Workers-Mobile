// React
import React from 'react'

// React Native
import { StyleSheet, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const HomeDesc = ({ children }) => <Text style={styles.desc}>{children}</Text>

const styles = StyleSheet.create({
    desc: {
        color: Colors.darkGrey,
        fontFamily: Family.normal,
        fontSize: Size.small,
        paddingHorizontal: 24,
        lineHeight: 21
    }
})

export default HomeDesc
