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

const OfferHeader = ({ category, name, totalSalary }) => (
    <View style={styles.container}>
        <View style={styles.left}>
            <Text style={styles.category}>
                {name}
            </Text>
            <Text style={styles.title}>
                {category}
            </Text>
        </View>
        <View style={styles.salaryContainer}>
            <Text style={styles.salary}>
                {totalSalary}€
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    left: {
        flex: 1,
        paddingRight: 24
    },
    category: {
        fontFamily: Family.bold,
        fontSize: Size.tiny,
        marginBottom: 4,
        color: Colors.primary
    },
    title: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.white,
    },
    salaryContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.accentBg,
        borderRadius: 16
    },
    salary: { 
        color: Colors.accent,
        fontFamily: Family.bold, 
        fontSize: Size.big,
    }
})

export default OfferHeader
