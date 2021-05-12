// React
import React from 'react'

// React Native
import {
    StyleSheet,
    View
} from 'react-native'

// Components
import ScheduleItem from './ScheduleItem'
import ScheduleToggleItem from './ScheduleToggleItem'

const Schedules = ({ schedules }) => (
    <View style={styles.container}>
        {schedules.length === 1
            ? <ScheduleItem shifts={schedules[0].shifts} />
            : schedules.map(({ day, shifts }, index) => (
                <ScheduleToggleItem index={index} day={day} shifts={shifts} />
            ))
        }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
    },
})

export default Schedules