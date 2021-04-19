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

const NoOffers = () => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: 'https://images.unsplash.com/photo-1618769089518-e2e94ef970c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' }}
            />
        </View>
        <Text style={styles.text}>Hola</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    imageContainer: {
        width: 260,
        height: 260
    },
    image: {
        padding: 16,
        width: '100%',
        height: '100%'
    },
    text: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.darkPrimary,
        marginTop: 16
    }
})

export default NoOffers
