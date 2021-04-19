// React
import React from 'react'

// React Native
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const TopRightButton = ({ onSelect, title, icon }) => (
    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={onSelect}>
        <Text style={styles.buttonText}>{title}</Text>
        <Ionicons name={icon} size={21} color={Colors.primary} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Family.bold,
        marginRight: 8,
        fontSize: Size.small,
        color: Colors.primary
    }
})

export default TopRightButton