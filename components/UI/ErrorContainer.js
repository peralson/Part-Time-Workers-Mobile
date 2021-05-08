// React
import React from 'react'

// React Native
import { StyleSheet, Text, View, Image } from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Image
import errorImage from '../../assets/sin_proyectos.png'

const ErrorContainer = () => (
    <View style={styles.container}>
        <Image source={errorImage} style={{ width: 160, height: 160, marginBottom: 8 }} resizeMode="contain" />
        <Text style={styles.text}>¡Ha ocurrido un error!</Text>
        <Text style={{...styles.text, ...{ fontFamily: Family.normal }}}>Inténtalo de nuevo más tarde.</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    text: {
        color: Colors.white,
        fontFamily: Family.bold,
        fontSize: Size.small,
        lineHeight: 21,
        textAlign: 'center'
    }
})

export default ErrorContainer