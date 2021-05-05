// React
import React, { useState } from 'react'

// React Native
import {
    View,
    TouchableOpacity,
    Alert
} from 'react-native'

// Libs
import moment from 'moment'
import 'moment/locale/es'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as jobsActions from '../../store/actions/jobs'

// Components
import Card from '../UI/Card'
import DarkTag from '../UI/DarkTag'
import ItemTitle from '../UI/ItemTitle'
import ItemDetails from '../UI/ItemDetails'
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
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                    <DarkTag>
                        {moment(eventData.date).format('DD MMMM')}
                    </DarkTag>
                    <View style={{ flex: 1 }}></View>
                </View>
                <ItemTitle style={{ marginBottom: 8 }}>{eventData.name}</ItemTitle>
                <ItemDetails
                    style={{ marginBottom: 16 }}
                    category={offerData.category}
                    companyName={companyData.name}
                    address={eventData.location.address.split(',')[0]}
                />
                <ApplyButton locked={!jobData.status === "active"} isJob={true} onSelect={handleCheck}>
                    {loading ? 'Esperando...' : checkin ? 'Check in' : 'Check out'}
                </ApplyButton>
            </Card>
        </TouchableOpacity>
    )
}

export default JobItem
