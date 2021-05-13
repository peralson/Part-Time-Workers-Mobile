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
import DarkTag from '../UI/DarkTag'
import ItemTitle from '../UI/ItemTitle'
import ItemDetails from '../UI/ItemDetails'
import PrimaryTag from '../UI/PrimaryTag'

const OfferItem = ({ offerData, eventData, companyData, onSelect }) => {
    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const total = offerData.salary * (hours + (minutes / 60))

    const datesLength = offerData.schedule.length;
    const formatDate = date => moment(date._seconds * 1000).format('D MMMM')
    
    const hasExtras = offerData.extras.filter(extra => extra.amount)

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <Card>
                <View style={styles.topContainer}>
                    <ItemTitle>{eventData.name}</ItemTitle>
                    <DarkTag>
                        {datesLength === 1
                            ? formatDate(offerData.schedule[0].day)
                            : `${formatDate(eventData.dates[0])} - ${formatDate(offerData.schedule[datesLength - 1].day)}`
                        }
                    </DarkTag>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.left}>
                        <ItemDetails
                            category={offerData.category}
                            companyName={companyData.companyName}
                            address={eventData.location.address.split(',')[0]}
                        />
                        <View style={styles.importants}>
                            <PrimaryTag>
                                {formattedSalary(offerData.salary)}€/hora
                            </PrimaryTag>
                            <PrimaryTag>
                                {hours}
                                {minutes !== 0 && (
                                    minutes < 10 ? `:0${minutes}` : `:${minutes}`
                                )} horas
                            </PrimaryTag>
                            {hasExtras.length !== 0 && (
                                <PrimaryTag>
                                    ...
                                </PrimaryTag>
                            )}
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
        paddingRight: 21
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
        lineHeight: 18,
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
        lineHeight: 14
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
