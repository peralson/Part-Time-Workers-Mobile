// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const EmptyList = ({ image, quote }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={image}
            />
        </View>
        <Text style={styles.quote}>{quote}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 32,
        alignItems: 'center'
    },
    imageContainer: {
        width: '100%',
        height: 120,
    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    quote: {
        fontFamily: Family.bold,
        fontSize: Size.tiny,
        color: Colors.darkPrimary,
        textAlign: 'center',
        marginTop: 16
    }
})

export default EmptyList
