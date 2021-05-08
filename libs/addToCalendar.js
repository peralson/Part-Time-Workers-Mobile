// React Native
import { Alert } from 'react-native'

// Colors
import Colors from '../constants/Colors'

// Expo
import * as Calendar from 'expo-calendar'

export const handleCalendar = async eventData => {
    const { status } = await Calendar.requestCalendarPermissionsAsync()
    if (status === 'granted') {
        try {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
            Alert.alert(
                '¿Deseas añadir este evento a tu calendario?',
                'Se añadirá al calendario de tu dispositivo',
                [
                    {
                        text: 'Cancel',
                        style: 'destructive',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            const laboraCalendar = calendars.find(each => each.title === 'Labora')
                            console.log(laboraCalendar)
                            if (laboraCalendar === undefined) {
                                createCalendar()
                                    .then(id => {
                                        Calendar.createEventAsync(id, {
                                            title: eventData.name,
                                            startDate: eventData.date,
                                            endDate: eventData.date,
                                            timeZone: 'Europe/Madrid',
                                            location: eventData.location.address.split(',')[0],
                                        })
                                    })
                            } else {
                                Calendar.createEventAsync(laboraCalendar.id, {
                                    title: eventData.name,
                                    startDate: eventData.date,
                                    endDate: eventData.date,
                                    timeZone: 'Europe/Madrid',
                                    location: eventData.location.address.split(',')[0],
                                })
                            }
                        }
                    }
                ]
            )
        } catch (e) {
            console.error(e)
        }
    }
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const defaultCalendars = calendars.filter(each => each.source.name === 'iCloud');
    return defaultCalendars[0].source;
}
  
async function createCalendar() {
    const defaultCalendarSource = Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Labora' }
    
    const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Labora',
        color: Colors.darkPrimary,
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'Labora',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    })

    return newCalendarID
}