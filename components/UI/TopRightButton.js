// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const TopRightButton = ({ onSelect, title, icon, color }) => (
    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={onSelect}>
        {title && <Text style={{...styles.buttonText, ...{ color: color }}}>{title}</Text>}
        {icon && <Ionicons name={icon} size={21} color={color} style={{ marginRight: 8 }} />}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Family.normal,
        fontSize: Size.small
    }
})

export default TopRightButton