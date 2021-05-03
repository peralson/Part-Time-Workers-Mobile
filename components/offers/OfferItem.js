// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

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

const OfferItem = ({ offerData, eventData, companyData, onSelect }) => {
    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const total = offerData.salary * (hours + (minutes / 60))

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <Card>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>{eventData.name}</Text>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{moment(eventData.date).format('DD MMM').split('.')[0]}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.left}>
                        <View style={styles.details}>
                            <View style={styles.detail}>
                                <Ionicons name="person-outline" color={Colors.darkGrey} size={10} />
                                <Text style={styles.detailText}>{offerData.category}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Ionicons name="compass-outline" color={Colors.darkGrey} size={10} />
                                <Text style={styles.detailText}>{companyData.name}</Text>
                            </View>
                            <View style={styles.detail}>
                                <Ionicons name="location-outline" color={Colors.darkGrey} size={10} />
                                <Text style={styles.detailText}>{eventData.location.address.split(',')[0]}</Text>
                            </View>
                        </View>
                        <View style={styles.importants}>
                            <View style={styles.important}>
                                <Text style={styles.importantText}>
                                    {formattedSalary(offerData.salary)}€/hora
                                </Text>
                            </View>
                            <View style={styles.important}>
                                <Text style={styles.importantText}>
                                    {hours}
                                    {minutes !== 0 && (
                                        minutes < 10 ? `:0${minutes}` : `:${minutes}`
                                    )} horas
                                </Text>
                            </View>
                            <View style={styles.important}>
                                <Text style={styles.importantText}>...</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}>{total.toFixed(0)}€</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    title: {
        fontFamily: Family.bold,
        fontSize: Size.small,
        color: Colors.white,
        flex: 1,
        paddingRight: 16
    },
    dateContainer: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.darkPrimary,
        borderRadius: 4
    },
    date: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.white,
        lineHeight: 12
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    left: {
        flex: 1,
        marginRight: 16,
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailText: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.darkGrey,
        lineHeight: 14,
        marginLeft: 4
    },
    importants: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    important: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 4,
        borderRadius: 4,
        backgroundColor: Colors.primaryBg
    },
    importantText: {
        color: Colors.primary,
        fontFamily: Family.normal,
        fontSize: Size.micro,
        lineHeight: 12
    },
    amountContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: Colors.accentBg
    },
    amount: {
        fontFamily: Family.bold,
        color: Colors.accent,
        fontSize: Size.big
    }
})

export default OfferItem
