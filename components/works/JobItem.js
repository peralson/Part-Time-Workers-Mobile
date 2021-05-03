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

// Expo
import { Ionicons } from '@expo/vector-icons'

// Libs
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

const JobItem = ({ offerData, eventData, companyData, jobData, onSelect }) => {
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
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{moment(eventData.date).format('DD MMMM')}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <Text style={styles.title}>{eventData.name}</Text>
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
                <ApplyButton locked={!jobData.status === "active"} isJob={true} onSelect={handleCheck}>
                    {loading ? 'Esperando...' : checkin ? 'Check in' : 'Check out'}
                </ApplyButton>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dateContainer: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Colors.darkPrimary,
        borderRadius: 4,
        marginBottom: 8
    },
    date: {
        fontFamily: Family.normal,
        fontSize: Size.micro,
        color: Colors.white,
    },
    title: {
        fontFamily: Family.bold,
        fontSize: Size.small,
        color: Colors.white,
        marginBottom: 8
    },
    location: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.darkGrey,
    },
    details: {
        marginBottom: 16
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
})

export default JobItem
