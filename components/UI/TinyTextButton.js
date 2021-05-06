import React from 'react'

// React Native
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Colors from '../../constants/Colors'
import FontFamily from '../../constants/FontFamily'
import FontSize from '../../constants/FontSize'

const TinyContractButton = ({ onSelect }) => (
    <TouchableOpacity onPress={onSelect} style={styles.container} >
        <Text style={styles.text}>Ver</Text>
        <Ionicons name="eye-outline" color={Colors.primary} size={14} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: Colors.primary,
        fontFamily: FontFamily.normal,
        fontSize: FontSize.small,
        marginRight: 4
    }
})

export default TinyContractButton