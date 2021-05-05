// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ItemDetails = ({ style, category, companyName, address }) => (
    <View style={style}>
        {category && <View style={styles.detail}>
            <Ionicons name="person-outline" color={Colors.darkGrey} size={10} />
            <Text style={styles.detailText}>{category}</Text>
        </View>}
        {companyName && <View style={styles.detail}>
            <Ionicons name="compass-outline" color={Colors.darkGrey} size={10} />
            <Text style={styles.detailText}>{companyName}</Text>
        </View>}
        {address && <View style={styles.detail}>
            <Ionicons name="location-outline" color={Colors.darkGrey} size={10} />
            <Text style={styles.detailText}>{address}</Text>
        </View>}
    </View>
)

const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailText: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.darkGrey,
        lineHeight: 18,
        marginLeft: 8
    },
})

export default ItemDetails