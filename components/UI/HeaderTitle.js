// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const HeaderTitle = ({ title }) => <Text style={styles.title}>{title}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.black,
        lineHeight: 32,
    }
})

export default HeaderTitle