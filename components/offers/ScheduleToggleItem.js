// React
import React, { useState } from 'react'

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

// Components
import ScheduleItem from './ScheduleItem'
import OfferInfoItem from './OfferInfoItem'
import FontFamily from '../../constants/FontFamily'
import FontSize from '../../constants/FontSize'

const ScheduleToggleItem = ({ day, shifts }) => {
    const [open, isOpen] = useState(false)
    const formmatedDay = moment(day._seconds * 1000).format('D MMMM')
    return (
        <TouchableOpacity
            style={styles.dayContainer}
            activeOpacity={.8}
            onPress={() => isOpen(state => !state)}
        >
            <OfferInfoItem
                left={formmatedDay}
                right={(
                    <View style={styles.ctaContainer}>
                        <Text style={styles.tinyText}>{open ? 'Ocultar' : 'Ver'}</Text>
                        <Ionicons name="triangle" size={8} color={Colors.primary} style={{ transform: [{ rotateX: open ? '0deg' : '180deg' }] }} />
                    </View>
                )}
            />
            {open && <ScheduleItem shifts={shifts} />}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    dayContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: Colors.grey,
        borderRadius: 10,
        marginTop: 8,
    },
    ctaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 4
    },
    tinyText: {
        fontFamily: FontFamily.normal,
        color: Colors.primary,
        fontSize: FontSize.tiny,
        marginRight: 4
    }
})

export default ScheduleToggleItem
