// React
import React from 'react'

// React Native
import { StyleSheet, Text } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ItemTitle = ({ children, style }) => <Text numberOfLines={1} style={{...styles.title, ...style}}>{children}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily: Family.bold,
        fontSize: Size.small,
        color: Colors.white
    },
})

export default ItemTitle
