// React
import React, { useState } from 'react'

// React Native
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

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

const OfferDetailScreen = ({ navigation, route }) => {
    const [height, setHeight] = useState(0)

    const { offerId, application } = route.params
    const offerData = useSelector(state => state.offers.openOffers.find(offer => offer.id === offerId))

    const { hours, minutes } = totalHoursCalc(offerData.schedule)

    const totalSalary = ((hours + (minutes / 60)) * offerData.salary).toFixed(0)

    const offerApplicationHandler = () => navigation.navigate('ApplicationsStack', { screen: 'ApplicationResume', params: { offerId: offerId } })

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
                        title={moment(offerData.date).format('DD MMMM')}
                        icon={<Ionicons name="calendar-outline" size={21} color={Colors.darkPrimary} />}
                        cta="Añadir"
                    />
                    <DetailItem
                        title={offerData.location.address.split(',')[0]}
                        icon={<Ionicons name="map-outline" size={21} color={Colors.darkPrimary} />}
                        cta="Ver mapa"
                    />
                </DetailsContainer>
                {offerData.requirements.length !== 0 && (
                    <>
                        <Label>Requerimientos</Label>
                        <Description>{offerData.requirements}</Description>
                    </>
                )}
                <Label>Horario</Label>
                <Schedules schedules={offerData.schedule} hours={hours} minutes={minutes} />
                <Label>Sobre el puesto</Label>
                {offerData.description.length !== 0 && <Description>{offerData.description}</Description>}
            </ScrollView>
            {!application && (
                <View onLayout={e => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
                    <ApplyButton qty={offerData.qty} alreadyAssigned={offerData.alreadyAssigned} onSelect={offerApplicationHandler} />
                </View>
            )}
        </Screen>
    )
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