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

// Components
import ScheduleItem from './ScheduleItem'

const Schedules = ({ schedules, hours, minutes }) => (
    <View style={styles.container}>
        <View style={styles.left}>
            {schedules.length > 1 && null}
            <View style={styles.totalHoursContainer}>
                <Text style={styles.total}>
                    {hours}{minutes !== 0 && `:${minutes}`}
                </Text>
                <Text style={styles.hours}>
                    {hours <= 1 ? 'hora' : 'horas'}
                </Text>
            </View>
            {schedules.length > 1 && null}
        </View>
        <View style={styles.right}>
            {schedules.map((sche, index) => <ScheduleItem key={index} schedule={sche} />)}
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        marginTop: 8,
    },
    left: {
        marginLeft: 16,
        marginRight: 24,
    },
    right: {
        flex: 1
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
    }
})

export default Schedules