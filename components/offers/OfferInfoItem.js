// React
import React from 'react'

// React Native
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const OfferInfoItem = ({ left, right }) => (
    <View style={styles.companyDetailsItem}>
        <Text style={{...styles.companyDetailsItemText, ...{ fontFamily: Family.bold }}}>
            {left}
        </Text>
        <Text style={styles.companyDetailsItemText}>
            {right}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    companyDetailsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 8
    },
    companyDetailsItemText: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.darkPrimary,
        lineHeight: 19
    },
})

export default OfferInfoItem