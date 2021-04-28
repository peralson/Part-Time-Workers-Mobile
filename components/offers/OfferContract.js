// React
import React from 'react'

// React Native
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'

const OfferContract = ({ name, onSelect }) => (
    <TouchableOpacity onPress={onSelect} activeOpacity={0.8} style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Card>
            <View style={styles.contractContainer}>
                <Text style={styles.pdf}>PDF</Text>
            </View>
        </Card>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        paddingBottom: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.darkPrimary
    },
    contractContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pdf: {
        fontFamily: Family.bold,
        marginTop: 4,
        fontSize: Size.small,
        color: Colors.black
    },
})

export default OfferContract