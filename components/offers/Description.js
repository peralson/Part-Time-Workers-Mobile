// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const Description = ({ children }) => (
    <View style={styles.outContainer}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    outContainer: {
        marginBottom: 24,
    },
    text: {
        color: Colors.darkPrimary,
        fontFamily: Family.normal,
        fontSize: Size.small,
        lineHeight: 27
    }
})

export default Description