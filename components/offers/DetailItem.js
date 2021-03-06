// React
import React from 'react'

// React Native
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const DetailItem = ({ onSelect, icon, title, cta }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect} style={styles.buttonContainer}>
            {icon}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cta}>{cta}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontFamily: Family.bold,
        color: Colors.darkPrimary,
        fontSize: Size.small,
        marginTop: 8
    },
    cta: {
        fontFamily: Family.normal,
        color: Colors.primary,
        fontSize: Size.tiny,
        marginTop: 8,
    },
})

export default DetailItem