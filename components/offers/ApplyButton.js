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

const ApplyButton = ({ onSelect, children, locked }) => (
    <TouchableOpacity
        style={locked ? styles.lockedContainer : styles.buttonContainer}
        activeOpacity={0.8}
        onPress={locked ? () => {} : onSelect}
    >
        <Text style={locked ? styles.lockedButton : styles.button}>{children}</Text>
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

    lockedContainer: {
        paddingVertical: 16,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: 16,
    },
    lockedButton: {
        fontFamily: Family.bold,
        fontSize: Size.tiny,
        color: 'rgba(0, 0, 0, 0.16)'
    },
})

export default ApplyButton