// React
import React from 'react'

// React Native
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Libs
import moment from 'moment'
import 'moment/locale/es'

// Constants
import Colors from '../../constants/Colors'
import Family from '../../constants/FontFamily'
import Size from '../../constants/FontSize'

// Components
import Card from '../UI/Card'

const PastJobItem = ({ offerData, eventData, onSelect, jobData }) => {
    let status
    let textColor

    switch (jobData.status) {
        case 'complete':
            status = 'Completado'
            textColor = 'green'
            break
    
        case 'pending':
            status = 'Pendiente de pago'
            textColor = 'orange'
            break

        case 'canceled':
            status = 'Cancelado'
            textColor = 'red'
            break

        case 'missed':
            status = 'No presentado'
            textColor = 'red'
            break
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelect}>
            <Card>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.date}>{moment(eventData.date).format('DD/MM/YYYY')}</Text>
                        <Text style={styles.title}>{eventData.name}</Text>
                        <Text style={styles.location}>{offerData.category} | {eventData.location.address.split(',')[0]}</Text>
                        <Text style={{...styles.status, ...{ color: textColor }}}>{status}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Ionicons name="arrow-forward" color={Colors.primary} size={14} />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 16,
    },
    date: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
        color: Colors.darkGrey,
        marginBottom: 8
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
        marginBottom: 8
    },
    status: {
        fontFamily: Family.normal,
        fontSize: Size.tiny,
    },
    rightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
})

export default PastJobItem