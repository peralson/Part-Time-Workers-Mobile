// React
import React, { useState } from 'react'

// React Native
import { Alert, ScrollView, StyleSheet, View } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'
import * as Calendar from 'expo-calendar'

// Redux
import { useSelector } from 'react-redux'

// Libs
import formattedSalary from '../../libs/formattedSalary'
import totalHoursCalc from '../../libs/totalHoursCalc'
import moment from 'moment'
import 'moment/locale/es'

// Constants
import Colors from '../../constants/Colors'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import BackButton from '../../components/UI/BackButton'
import ApplyButton from '../../components/offers/ApplyButton'
import OfferHeader from '../../components/offers/OfferHeader'
import Description from '../../components/offers/Description'
import DetailsContainer from '../../components/offers/DetailsContainer'
import DetailItem from '../../components/offers/DetailItem'
import Label from '../../components/UI/Label'
import Schedules from '../../components/offers/Schedules'
import TopRightButton from '../../components/UI/TopRightButton'
import OfferInfoItem from '../../components/offers/OfferInfoItem'
import OfferCompany from '../../components/offers/OfferCompany'
import OfferContract from '../../components/offers/OfferContract'

const OfferDetailScreen = ({ navigation, route }) => {
    const [height, setHeight] = useState(0)

    const { offerId, application, job } = route.params
    const offerData = useSelector(state => state.offers.openOffers.find(offer => offer.id === offerId))

    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const totalSalary = ((hours + (minutes / 60)) * offerData.salary).toFixed(0)

    const offerApplicationHandler = () => {
        navigation.navigate(
            'ApplicationsStack',
            {
                screen: 'ApplicationResume',
                params: { offerId: offerId }
            }
        )
    }

    const handleCalendar = async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync()
        
        if (status === 'granted') {
          createCalendar()
        }
    }

    const handleCancelApplication = () => {
        Alert.alert(
            '¿Estas seguro?',
            '',
            [
                { text: 'No' },
                { text: 'Sí', style: 'destructive', onPress: () => {} },
            ]
        )
    }
    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                rightComponent={application && <TopRightButton title="Anular aplicación" color="red" onSelect={handleCancelApplication} />}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: height, paddingVertical: 16, paddingHorizontal: 24 }}>
                <OfferHeader category={offerData.category} name={offerData.name} totalSalary={totalSalary} />

                <DetailsContainer>
                    <DetailItem
                        title={moment(offerData.date).format('D MMMM')}
                        icon={<Ionicons name="calendar-outline" size={21} color={Colors.darkPrimary} />}
                        cta="Añadir"
                        onSelect={handleCalendar}
                    />
                    <DetailItem
                        title={offerData.location.address.split(',')[0]}
                        icon={<Ionicons name="map-outline" size={21} color={Colors.darkPrimary} />}
                        cta="Ver"
                        onSelect={() => navigation.navigate('Map', { address: offerData.location.address.split(',')[0], lat: offerData.location.lat, lng: offerData.location.lng, })}
                    />
                    {job && (
                        <DetailItem
                            title="WhatsApp"
                            icon={<Ionicons name="logo-whatsapp" size={21} color={Colors.darkPrimary} />}
                            cta="Entrar"
                            onSelect={() => {}}
                        />
                    )}
                </DetailsContainer>

                {offerData.requirements.length !== 0 && (
                    <>
                        <Label>Requerimientos</Label>
                        <Description>{offerData.requirements}</Description>
                    </>
                )}

                <Label>Horario</Label>
                <Schedules schedules={offerData.schedule} hours={hours} minutes={minutes} />

                <Label>Más información</Label>
                <OfferCompany name={offerData.companyName} image={offerData.companyImage} />
                <OfferInfoItem left="Salario" right={formattedSalary(offerData.salary) + '€'} />
                <OfferInfoItem left="Salario extra" right={formattedSalary(offerData.extraSalary) + '€'} />
                <OfferInfoItem left="Desplazamiento" right="Si" />
                <OfferInfoItem left="Nocturnidad" right="No" />
                {offerData.description.length !== 0 && (
                    <>
                        <OfferInfoItem left="Descrición" />
                        <Description>{offerData.description}</Description>
                    </>
                )}

                <Label>Contrato</Label>
                <OfferContract name="Contrato de camarero" onSelect={() => {}} />
            </ScrollView>
            {(!application || !job) && (
                <View onLayout={e => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
                    <ApplyButton qty={offerData.qty} alreadyAssigned={offerData.alreadyAssigned} onSelect={offerApplicationHandler} />
                </View>
            )}
        </Screen>
    )
}

const createCalendar = async () => {
    const defaultCalendarSource =
        Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' }
    const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Expo Calendar',
        color: 'blue',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER
    })
    console.log(`Your new calendar ID is: ${newCalendarID}`)
}

const getDefaultCalendarSource = async () => {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    const defaultCalendars = calendars.filter(each => each.source.name === 'Default')
    return defaultCalendars[0].source
}

const styles = StyleSheet.create({
    bottomAbsolute: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.white,
        paddingBottom: 32,
        paddingTop: 8,
        paddingHorizontal: 24,
        borderTopColor: Colors.grey,
        borderTopWidth: 0.6
    },
    wrapper: {
        paddingHorizontal: 24
    }
})

export default OfferDetailScreen