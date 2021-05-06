// React
import React, { useState } from 'react'

// React Native
import { Alert, ScrollView, StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Actions
import * as jobActions from '../../store/actions/jobs'

// Libs
import handleStatus from '../../libs/handleStatus'
import { handleCalendar } from '../../libs/addToCalendar'
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

const WorkDetailScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false)
    const [height, setHeight] = useState(0)

    const { offerId, jobId } = route.params

    const {
        offerData,
        eventData,
        companyData,
        jobData
    } = useSelector(state => state.jobs.userJobs.find(offer => offer.id === offerId))

    const dispatch = useDispatch()

    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const totalSalary = ((hours + minutes / 60) * offerData.salary).toFixed(0)

    const handleCancelJob = () => {
        Alert.alert('¿Estas seguro?', '', [
            { text: 'No' },
            {
                text: 'Sí',
                style: 'destructive',
                onPress: () => {
                    dispatch(jobActions.cancelJob(jobId))
                    navigation.navigate('Home', { screen: 'Trabajos' })
                }
            }
        ])
    }

    const handleCheck = () => {
        setLoading(true)
        dispatch(jobsActions.checkJob(jobData.id_event))
            .then(() => {
                setLoading(false)
            })
            .catch(e => {
                Alert(e.message)
                setLoading(false)
            })
    }

    return (
        <Screen>
            <HomeWrapper
                leftComponent={<BackButton onGoBack={() => navigation.goBack()} />}
                title="Trabajo"
                rightComponent={<TopRightButton title='Cancelar' color='red' onSelect={handleCancelJob} />}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginBottom: height,
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                }}
            >
                <OfferHeader
                    category={offerData.category}
                    name={eventData.name}
                    totalSalary={totalSalary}
                />
                <DetailsContainer>
                    <DetailItem
                        title={moment(eventData.date).format('D MMMM')}
                        icon={
                            <Ionicons
                                name='calendar-outline'
                                size={21}
                                color={Colors.white}
                            />
                        }
                        cta='Añadir'
                        onSelect={() => handleCalendar(eventData)}
                    />
                    <DetailItem
                        title={eventData.location.address.split(',')[0]}
                        icon={
                            <Ionicons
                                name='map-outline'
                                size={21}
                                color={Colors.white}
                            />
                        }
                        cta='Ver'
                        onSelect={() => navigation.navigate('OffersStack', {screen: 'Map', params: { address: eventData.location.address.split(',')[0], lat: eventData.location.lat, lng: eventData.location.lng }})}
                    />
                    <DetailItem
                        title='WhatsApp'
                        icon={
                            <Ionicons
                                name='logo-whatsapp'
                                size={21}
                                color={Colors.white}
                            />
                        }
                        cta='Entrar'
                        onSelect={() => {}}
                    />
                </DetailsContainer>
                {offerData.description.length !== 0 && (
                    <>
                        <Label style={{ marginBottom: 8 }}>Requerimientos</Label>
                        <Description>{offerData.description}</Description>
                    </>
                )}
                <Label style={{ marginBottom: 8 }}>Horario</Label>
                <Schedules
                    schedules={offerData.schedule}
                    hours={hours}
                    minutes={minutes}
                />

                <Label style={{ marginBottom: 8 }}>Más información</Label>
                <OfferCompany name={companyData.name} image={companyData.photo} />
                <OfferInfoItem
                    left='Salario'
                    right={formattedSalary(offerData.salary) + '€'}
                />
                <OfferInfoItem
                    left='Salario extra'
                    right={formattedSalary(offerData.extraSalary) + '€'}
                />
                <OfferInfoItem left='Desplazamiento' right='Si' />
                <OfferInfoItem left='Nocturnidad' right='No' />
                <OfferInfoItem left='Contrato' right={(
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('OffersStack', { screen: 'PDF', params: { type: 'Contrato', file: 'https://bitcoin.org/bitcoin.pdf' } })}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ color: Colors.primary, marginRight: 4 }}>Ver</Text>
                        <Ionicons name="eye-outline" color={Colors.primary} size={14} />
                    </TouchableOpacity>
                )} />
                {eventData.description.length !== 0 && (
                    <>
                        <OfferInfoItem left='Descrición' />
                        <Description>{eventData.description}</Description>
                    </>
                )}
            </ScrollView>
            <View onLayout={(e) => setHeight(e.nativeEvent.layout.height)} style={styles.bottomAbsolute}>
                <ApplyButton locked={jobData.status === "none"} onSelect={handleCheck}>
                    {loading ? 'Esperando...' : handleStatus(jobData.status)}
                </ApplyButton>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    bottomAbsolute: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.darkPrimary,
        paddingBottom: Platform.OS === 'ios' ? 32 : 8,
        paddingTop: 8,
        paddingHorizontal: 16,
        borderTopColor: Colors.grey,
        borderTopWidth: 1,
    },
    wrapper: {
        paddingHorizontal: 24,
    },
})

export default WorkDetailScreen