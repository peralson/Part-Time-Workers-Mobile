// React Native
import { Alert } from 'react-native'

// Expo
import * as Calendar from 'expo-calendar'

export const handleCalendar = async eventData => {
    const { status } = await Calendar.requestCalendarPermissionsAsync()
        if (status === 'granted') {
        try {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
            createCalendar(calendars[0].id, eventData)
        } catch (error) {
            console.log(error)
        }
    }
}

export const createCalendar = async (id, eventData) => {
    Alert.alert(
        '¿Deseas añadir este evento a tu calendario?',
        'Se añadirá al calendario de tu dispositivo',
        [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => 
                    Calendar.createEventAsync(id, {
                        title: eventData.name,
                        startDate: eventData.date,
                        endDate: eventData.date,
                        timeZone: 'Europe/Madrid',
                        location: eventData.location.address.split(',')[0],
                    }),
            }
        ]
    )
}