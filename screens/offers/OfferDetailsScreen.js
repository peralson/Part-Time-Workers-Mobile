// React
import React from 'react'

// React Native
import { ScrollView } from 'react-native'

// Expo
import { Ionicons } from '@expo/vector-icons'

// Redux
import { connect } from 'react-redux'

// Libs
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
import OfferInfoItem from '../../components/offers/OfferInfoItem'
import OfferCompany from '../../components/offers/OfferCompany'
import TinyContractButton from '../../components/UI/TinyTextButton'
import BottomAbsConatiner from '../../components/UI/BottomAbsConatiner'

const OfferDetailScreen = ({
	navigation,
	route,
	openOffers
}) => {
    const { offerId } = route.params
	const thisOffer = openOffers.find(offer => offer.id === offerId)

	if (!thisOffer) return <Screen></Screen>

    const {
      offerData,
      eventData,
      companyData
    } = thisOffer

    const { hours, minutes } = totalHoursCalc(offerData.schedule)
    const totalSalary = ((hours + minutes / 60) * offerData.salary).toFixed(0)

	const datesLength = offerData.schedule.length;
    const formatDate = date => moment(date._seconds * 1000).format('D MMMM')

	const handleSendApplication = () => {
		navigation.navigate(
			'ApplicationsStack',
			{ screen: 'ApplicationResume', params: { offerId: offerId } }
		)
	}

	return (
		<Screen>
			<HomeWrapper leftComponent={<BackButton onGoBack={() => navigation.goBack()} />} title="Oferta" />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 100,
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
					title={datesLength === 1
						? formatDate(offerData.schedule[0].day)
						: `${formatDate(eventData.dates[0])} - ${formatDate(offerData.schedule[datesLength - 1].day)}`
					}
					icon={<Ionicons name='calendar-outline' size={21} color={Colors.white} />}
					cta='Añadir'
					onSelect={() => handleCalendar(eventData)}
				/>
				<DetailItem
					title={eventData.location.address.split(',')[0]}
					icon={<Ionicons name='map-outline' size={21} color={Colors.white} />}
					cta='Ver'
					onSelect={() => navigation.navigate('Map', { address: eventData.location.address.split(',')[0], lat: eventData.location.lat, lng: eventData.location.lng })}
				/>
				</DetailsContainer>
				{offerData.description.length !== 0 && (
					<>
						<Label style={{ marginBottom: 12 }}>Requerimientos</Label>
						<Description>{offerData.description}</Description>
					</>
				)}
				
				<Label style={{ marginBottom: 8 }}>Horario</Label>
				<Schedules schedules={offerData.schedule} />

				<Label style={{ marginBottom: 8 }}>Más información</Label>
				<OfferCompany name={companyData.companyName} image={companyData.companyImage} />
				<OfferInfoItem
					left='Salario'
					right={formattedSalary(offerData.salary) + '€'}
				/>
				<OfferInfoItem
					left='Salario extra'
					right={formattedSalary(offerData.extraSalary) + '€'}
				/>
				{offerData.extras.map((extra, index) => {
					if (extra.amount === 0) return
					const extraAmount = formattedSalary(parseInt(extra.amount))
					return <OfferInfoItem key={index} left={extra.name} right={extraAmount + '€'} />
				})}
				<OfferInfoItem left='Contrato' right={
						<TinyContractButton
							onSelect={() => navigation.navigate('OffersStack', { screen: 'PDF', params: { id: offerId, type: 0 } })} 
						/>
					}
				/>
				{eventData.description.length !== 0 && (
					<>
						<OfferInfoItem left='Descripción' />
						<Description>{eventData.description}</Description>
					</>
				)}
			</ScrollView>
			<BottomAbsConatiner>
				<ApplyButton onSelect={handleSendApplication}>
					Aplicar
				</ApplyButton>
			</BottomAbsConatiner>
		</Screen>
	)
}

const mapStateToProps = state => {
	return {
		openOffers: state.offers.openOffers
	}
}

export default connect(mapStateToProps, null)(OfferDetailScreen)
