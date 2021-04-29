// React
import React from 'react'

// React Native
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'

// Libs
import moment from 'moment'
import 'moment/locale/es'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'

const JobContract = ({ contract, onSelect }) => (
    <TouchableOpacity onPress={onSelect} activeOpacity={0.8}>
        <Card>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.date}>{moment(contract.eventData.date).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.title}>{contract.eventData.name}</Text>
                    <Text style={styles.location}>{contract.offerData.category} | {contract.eventData.location.address.split(',')[0]}</Text>
                </View>
                <View style={styles.contractContainer}>
                    <Text style={styles.btn}>Ver PDF</Text>
                </View>
            </View>
        </Card>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 16,
    },
    date: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.darkGrey,
        marginBottom: 8
    },
    title: {
        fontFamily: Family.bold,
        fontSize: Size.medium,
        color: Colors.black,
        marginBottom: 8
    },
    location: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.darkGrey,
    },
    contractContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.primary,
        marginRight: 8
    },
})

export default JobContract