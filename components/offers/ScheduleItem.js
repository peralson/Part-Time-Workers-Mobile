// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

// Libs
import moment from 'moment'
import 'moment/locale/es'
import shiftsHoursCalc from '../../libs/shiftsHoursCalc'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ScheduleItem = ({ shifts }) => {
    const { hours, minutes } = shiftsHoursCalc(shifts)
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.totalHoursContainer}>
                    <Text style={styles.total}>
                        {hours}{minutes !== 0 && `:${minutes}`}
                    </Text>
                    <Text style={styles.hours}>
                        {hours <= 1 ? 'hora' : 'horas'}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                {shifts.map((shift, index) => (
                    <View key={index} style={styles.innerRight}>
                        <View style={styles.boxContainer}>
                            <View style={styles.box}>
                                <Text style={styles.indicator}>
                                    de
                                </Text>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.time}>
                                    {moment(shift.start._seconds * 1000).format('HH:mm')}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.box}>
                                <Text style={styles.indicator}>
                                    a
                                </Text>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.time}>
                                    {moment(shift.end._seconds * 1000).format('HH:mm')}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        paddingBottom: 16
    },
    left: {
        marginLeft: 16,
        marginRight: 24,
    },
    totalHoursContainer: {
        alignItems: 'center'
    },
    total: {
        fontFamily: Family.bold,
        color: Colors.white,
        fontSize: Size.medium,
        paddingBottom: 4
    },
    hours: {
        fontFamily: Family.normal,
        color: Colors.darkGrey,
        fontSize: Size.micro
    },
    right: {
        flex: 1,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: Colors.primaryBg,
    },
    innerRight: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    boxContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    box: {
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    indicator: {
        color: Colors.darkGrey,
        fontFamily: Family.normal,
        fontSize: Size.micro
    },
    time: {
        color: Colors.primary,
        fontFamily: Family.bold,
        fontSize: Size.medium
    }
})

export default ScheduleItem
