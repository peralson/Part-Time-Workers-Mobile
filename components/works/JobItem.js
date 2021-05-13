// React
import React, { useState } from 'react'

// React Native
import {
    View,
    TouchableOpacity,
    Alert
} from 'react-native'

// Libs
import handleStatus from '../../libs/handleStatus'
import moment from 'moment'
import 'moment/locale/es'

// Redux
import { connect } from 'react-redux'

// Actions
import { checkJob } from '../../store/actions/jobs'

// Components
import Card from '../UI/Card'
import DarkTag from '../UI/DarkTag'
import ItemTitle from '../UI/ItemTitle'
import ItemDetails from '../UI/ItemDetails'
import ApplyButton from '../offers/ApplyButton'

const JobItem = ({
    offerData,
    eventData,
    companyData,
    jobData,
    onSelect,
    checkJob
}) => {
    const [loading, setLoading] = useState(false)

    const handleCheck = async () => {
        setLoading(true)
        try {
            await checkJob(jobData.id_event)
        } catch (err) {
            Alert.alert('Oh! Vaya...', err.message, [{ text: 'Okay' }])
        } finally {
            setLoading(false)
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect} style={{ marginRight: 8, width: 185 }}>
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
                    companyName={companyData.companyName}
                    address={eventData.location.address.split(',')[0]}
                />
                <ApplyButton locked={jobData.status === "none"} onSelect={handleCheck}>
                    {loading ? 'Esperando...' : handleStatus(jobData.status)}
                </ApplyButton>
            </Card>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = {
    checkJob
}

export default connect(null, mapDispatchToProps)(JobItem)
