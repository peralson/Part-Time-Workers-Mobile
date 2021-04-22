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

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

const ScheduleItem = ({ schedule }) => (
    <View style={styles.container}>
        <View style={styles.boxContainer}>
            <View style={styles.box}>
                <Text style={styles.indicator}>
                    de
                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.time}>
                    {moment(schedule.start._seconds * 1000).format('HH:mm')}
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
                    {moment(schedule.end._seconds * 1000).format('HH:mm')}
                </Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: Colors.primary,
    },
    boxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    box: {
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    indicator: {
        color: Colors.darkGrey,
        fontFamily: Family.normal,
        fontSize: Size.small
    },
    time: {
        color: Colors.darkPrimary,
        fontFamily: 'gotham-bold',
        fontSize: Size.medium
    }
})

export default ScheduleItem
