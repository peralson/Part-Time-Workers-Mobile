// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ApplyButton = ({ onSelect, children }) => (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={onSelect}>
        <Text style={styles.button}>{children}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 16,
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.lightAccent,
        borderRadius: 16
    },
    button: {
        fontFamily: Family.bold,
        fontSize: Size.tiny,
        color: Colors.accent
    },
})

export default ApplyButton