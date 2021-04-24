// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux'

//Actions
import * as applicationsActions from '../../store/actions/applications'
import * as jobsActions from '../../store/actions/jobs'

// Components
import Screen from '../../components/UI/Screen'
import HomeWrapper from '../../components/UI/HomeWrapper'
import HeaderTitle from '../../components/UI/HeaderTitle'
import Label from '../../components/UI/Label'
import SideScrollPicker from '../../components/UI/SideScrollPicker'
import OfferItem from '../../components/offers/OfferItem'
import EmptyList from '../../components/works/EmptyList'
import IsLoadingMini from '../../components/UI/IsLoadingMini'

const WorksHomeScreen = ({ navigation }) => {
	const [applicationsLoading, setApplicationsLoading] = useState(true)
	const applications = useSelector(state => state.applications.userApplications)

	const [jobsLoading, setJobsLoading] = useState(true)
	const jobs = useSelector(state => state.jobs.userJobs)
	
	// const offers = useSelector(state => state.offers.openOffers)

	const dispatch = useDispatch()

	// const getOffers = applications => {
	//  	let offerApplications = []

	// 	applications.map(application => {
	// 		if (application.state === 'pending') {
	// 			const found = offers.find(offer => offer.id === application.offerId)
	// 			found.applicationId = application.id
	// 			offerApplications.push(found)
	// 		}
	// 	})

	// 	return offerApplications
	// }


	const loadApplications = async () => {
		try {
			await dispatch(applicationsActions.fetchApplications())
		} catch ({ message }) {
			console.log('error', message)
		}
	}

	const loadJobs = async () => {
		try {
			await dispatch(jobsActions.fetchJobs())
		} catch ({ message }) {
			console.log('error', message)
		}
	}

	// Aseguramos que la pantalla repita el fetch cada vez que entre
	useFocusEffect(
		useCallback(() => {
			loadJobs()
			loadApplications()
		}, [dispatch, setJobsLoading, setApplicationsLoading])
	)

	// Cargamos los proyectos de una manera visible al entrar por primera vez
	useEffect(() => {
		setJobsLoading(true)
		setApplicationsLoading(true)
		loadJobs()
			.then(() => setJobsLoading(false))
		loadApplications()
			.then(() => setApplicationsLoading(false))
	}, [])

	const offerDetailHandler = (offerId, applicationId) => {
		navigation.navigate('OffersStack', {
			screen: 'OfferDetails',
			params: {
				offerId: offerId,
				applicationId: applicationId
			}
		})
	}

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<HeaderTitle title='Trabajos' />}
				description='Aquí verás los trabajos que tengas pendientes de realizar y tus aplicaciones activas.'
			/>
			<ScrollView style={styles.content}>
				<View style={{ paddingHorizontal: 24 }}>
				<Label>Próximos trabajos</Label>
				</View>
				{jobsLoading ? <IsLoadingMini text="trabajos" /> : (
					<>
						{jobs.length === 0 ? (
							<EmptyList
								quote='No tienes próximos trabajos'
								image={require('../../assets/sin_proyectos.png')}
							/>
						) : (
							<SideScrollPicker>
								<Text>Si hay curros</Text>
							</SideScrollPicker>
						)}
					</>
				)}
				<View style={{ paddingHorizontal: 24 }}>
					<Label>Ofertas a las que he aplicado</Label>
					{applicationsLoading ? <IsLoadingMini text="aplicaciones" /> : (
						<>
							{applications.length === 0 ? (
								<EmptyList
									quote='No tienes aplicaciones...'
									image={require('../../assets/sin_posiciones.png')}
									onApply={() => navigation.navigate('Home', { screen: 'Ofertas' })}
								/>
							) : (
								applications.map(application => (
									<OfferItem
										key={application.id}
										{...application}
										onSelect={() => offerDetailHandler(application.id, application.applicationData.id)}
									/>
								))
							)}
						</>
					)}
				</View>
			</ScrollView>
		</Screen>
	)
}

const styles = StyleSheet.create({
	content: {
		paddingTop: 16
	}
})

export default WorksHomeScreen
