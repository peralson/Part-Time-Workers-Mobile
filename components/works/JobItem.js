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

const JobItem = ({ offerData, eventData, jobData, onSelect }) => {
    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const total = offerData.salary * (hours + (minutes / 60))

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect} style={{ marginRight: 8 }}>
            <Card>
                <View style={styles.topContainer}>
                    <Text style={styles.day}>
                        {moment(eventData.date).format('DD MMMM')}
                    </Text>
                    <View style={styles.titleLocation}>
                        <Text style={styles.title}>{eventData.name}</Text>
                        <Text style={styles.location}>{offerData.category} | {eventData.location.address.split(',')[0]}</Text>
                    </View>
                </View>
                <ApplyButton locked={!jobData.active} isJob={true} onSelect={() => {}}>
                    Comenzar
                </ApplyButton>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginBottom: 16
    },
    titleLocation: {
        flex: 1
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
    day: {
        fontFamily: Family.bold,
        fontSize: Size.small,
        color: Colors.darkPrimary,
        width: '100%',
        marginBottom: 8
    },
})

export default JobItem
