// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

// Libs
import formattedSalary from '../../libs/formattedSalary'
import totalHoursCalc from '../../libs/totalHoursCalc'
import moment from 'moment'
import 'moment/locale/es'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'
import ApplyButton from '../offers/ApplyButton'

const OfferItem = ({ offerData, eventData, onSelect, onApplication }) => {
    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const total = offerData.salary * (hours + (minutes / 60))

    if (offerData.already_assigned / offerData.qty === 1) return null
    
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <Card>
                <View style={styles.topContainer}>
                    <View style={styles.titleLocation}>
                        <Text style={styles.title}>{eventData.name}</Text>
                        <Text style={styles.location}>{offerData.category} | {eventData.location.address.split(',')[0]}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.day}>{moment(eventData.date).format('DD')}</Text>
                        <Text style={styles.month}>{moment(eventData.date).format('MMM').split('.')[0].toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.column}>
                        <Text style={styles.columnTop}>{formattedSalary(offerData.salary)}</Text>
                        <Text style={styles.columnBottom}>€/hora</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnTop}>
                            {hours}
                            {minutes !== 0 && (
                                minutes < 10 ?
                                    `:0${minutes}` :
                                    `:${minutes}`
                            )}
                        </Text>
                        <Text style={styles.columnBottom}>horas</Text>
                    </View>
                    <Text style={styles.amount}>{total.toFixed(0)}€</Text>
                </View>
                {onApplication && (
                    <View style={styles.bottomContainer}>
                        <ApplyButton onSelect={onApplication}>
                            Aplicar
                        </ApplyButton>
                        <Text style={styles.more}>Ver más</Text>
                    </View>
                )}
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    titleLocation: {
        flex: 1,
        paddingRight: 16
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
    date: {
        padding: 8,
        alignItems: 'center'
    },
    day: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.black,
        marginBottom: 4
    },
    month: {
        fontFamily: Family.normal,
        fontSize: Size.small,
        color: Colors.black,
    },
    middleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 8
    },
    column: {
        alignItems: 'center',
        flex: 1
    },
    columnTop: {
        fontFamily: Family.bold,
        fontSize: Size.big,
        color: Colors.darkPrimary,
        marginBottom: 4
    },
    columnBottom: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.darkPrimary
    },
    amount: {
        fontFamily: Family.bold,
        fontSize: Size.huge,
        color: Colors.darkPrimary,
        flex: 1,
        textAlign: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },
    more: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.primary,
        flex: 1,
        textAlign: 'center'
    },
})

export default OfferItem
