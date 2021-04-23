// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const EmptyList = ({ image, quote, onApply }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={image}
            />
        </View>
        <Text style={styles.quote}>{quote}</Text>
        {quote === "No tienes aplicaciones..." && (
            <TouchableOpacity activeOpacity={0.6} onPress={onApply}>
                <Text style={styles.apply}>Aplica</Text>
            </TouchableOpacity>
        )}
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginVertical: 32,
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
    },
    apply: {
        padding: 16,
        color: Colors.accent,
        fontFamily: Family.normal,
        fontSize: Size.small
    }
})

export default EmptyList
