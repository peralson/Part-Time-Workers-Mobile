// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const DarkTag = ({ children }) => (
    <View style={styles.tag}>
        <Text style={styles.text}>{children}</Text>
    </View>
)

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.darkPrimary,
        borderRadius: 4
    },
    text: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.white,
        lineHeight: 14
    },
})

export default DarkTag