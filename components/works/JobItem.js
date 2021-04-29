// React
import React, { useState } from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'

// Libs
import totalHoursCalc from '../../libs/totalHoursCalc'
import moment from 'moment'
import 'moment/locale/es'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as jobsActions from '../../store/actions/jobs'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'
import ApplyButton from '../offers/ApplyButton'

const JobItem = ({ offerData, eventData, jobData, onSelect }) => {
    const [checkin, setChecking] = useState(true)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const handleCheck = () => {
        setLoading(true)
        dispatch(jobsActions.checkJob(eventData.id))
            .then(() => {
                setChecking(state => !state)
                setLoading(false)
            })
            .catch(e => Alert(e.message))
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect} style={{ marginRight: 8 }}>
            <Card>
                <View style={styles.topContainer}>
                    <Text style={styles.day}>{moment(eventData.date).format('DD MMMM')}</Text>
                    <Text style={styles.title}>{eventData.name}</Text>
                    <Text style={styles.location}>{offerData.category} | {eventData.location.address.split(',')[0]}</Text>
                </View>
                <ApplyButton locked={!jobData.status === "active"} isJob={true} onSelect={handleCheck}>
                    {loading ? 'Esperando...' : checkin ? 'Check in' : 'Check out'}
                </ApplyButton>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginBottom: 24
    },
    day: {
        fontFamily: Family.bold,
        fontSize: Size.tiny,
        color: Colors.darkPrimary,
        width: '100%',
        marginBottom: 12
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
})

export default JobItem
