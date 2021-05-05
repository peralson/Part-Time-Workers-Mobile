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
import DarkTag from '../UI/DarkTag'
import ItemTitle from '../UI/ItemTitle'
import ItemDetails from '../UI/ItemDetails'

const JobPayroll = ({ payroll, onSelect }) => (
    <TouchableOpacity onPress={onSelect} activeOpacity={0.8}>
        <Card>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.dateContainer}>
                        <DarkTag>{moment(payroll.eventData.date).format('DD/MM/YYYY')}</DarkTag>
                    </View>
                    <ItemTitle style={{ marginBottom: 8 }}>{payroll.eventData.name}</ItemTitle>
                    <ItemDetails
                        category={payroll.offerData.category}
                        address={payroll.eventData.location.address.split(',')[0]}
                    />
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
    dateContainer: {
        marginBottom: 8
    },
    title: {
        fontFamily: Family.bold,
        fontSize: Size.medium,
        color: Colors.white,
        marginBottom: 8
    },
    location: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.darkGrey,
        lineHeight: 12
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

export default JobPayroll