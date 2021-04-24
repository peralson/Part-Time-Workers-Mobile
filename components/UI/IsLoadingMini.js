// React
import React from 'react'

// React Native
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const IsLoadingMini = ({ text }) => (
    <View style={styles.centered}>
        <ActivityIndicator size="small" color={Colors.primary} />
        <Text style={styles.text}>Cargando {text}...</Text>
    </View>
)

const styles = StyleSheet.create({
    centered: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: Family.normal,
        color: Colors.darkPrimary,
        fontSize: Size.tiny,
        marginTop: 16
    }
})

export default IsLoadingMini