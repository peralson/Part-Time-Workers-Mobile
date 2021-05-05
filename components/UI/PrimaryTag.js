// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const PrimaryTag = ({ children }) => (
    <View style={styles.tag}>
        <Text style={styles.text}>{children}</Text>
    </View>
)

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        backgroundColor: Colors.primaryBg,
        borderRadius: 4,
        marginRight: 4
    },
    text: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.primary,
        lineHeight: 14
    },
})

export default PrimaryTag