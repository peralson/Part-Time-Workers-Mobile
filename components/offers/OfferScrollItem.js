// React
import React from 'react'

// React Native
import { StyleSheet, Text, View } from 'react-native'

// Constats
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'

const OfferScrollItem = ({ title }) => (
    <View style={styles.selector}>
        <Text style={styles.selectorText}>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
    selector: {
        marginRight: 8,
        borderColor: Colors.darkPrimary,
        borderWidth: 1,
        borderRadius: 2,
        padding: 8
    },
    selectorText: {
        fontFamily: Family.bold,
        color: Colors.black,
        fontSize: Size.medium
    }
})


export default OfferScrollItem