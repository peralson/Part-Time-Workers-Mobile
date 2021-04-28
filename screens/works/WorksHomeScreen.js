// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ScrollView, StyleSheet, View } from 'react-native'

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
import JobItem from '../../components/works/JobItem'
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

	const applicationDetailHandler = (offerId, applicationId) => {
		navigation.navigate('OffersStack', {
			screen: 'OfferDetails',
			params: {
				offerId: offerId,
				applicationId: applicationId
			}
		})
	}

	const jobDetailHandler = (offerId, jobId) => {
		navigation.navigate('OffersStack', {
			screen: 'OfferDetails',
			params: {
				offerId: offerId,
				jobId: jobId
			}
		})
	}

	return (
		<Screen>
			<HomeWrapper
				leftComponent={<HeaderTitle title='Trabajos' />}
				description='Aquí verás los trabajos que tengas pendientes de realizar y tus aplicaciones activas.'
			/>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
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
								{jobs.map(job => (
									<JobItem
										key={job.id}
										{...job}
										onSelect={() => jobDetailHandler(job.id, job.jobData.id)}
									/>
								))}
							</SideScrollPicker>
						)}
					</>
				)}
				<View style={{ paddingHorizontal: 24 }}>
					<Label>Ofertas a las que he aplicado</Label>
					{applicationsLoading ? <IsLoadingMini text="aplicaciones" /> : (
						<>
							{applications.length === 0 ? (
								<View style={{ backgroundColor: 'red' }}>
									<EmptyList
										quote='No tienes aplicaciones...'
										image={require('../../assets/sin_posiciones.png')}
										onApply={() => navigation.navigate('Home', { screen: 'Ofertas' })}
									/>
								</View>
							) : (
								applications.map(application => (
									<OfferItem
										key={application.id}
										{...application}
										onSelect={() => applicationDetailHandler(application.id, application.applicationData.id)}
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
	container: {
        paddingTop: 16,
        paddingBottom: 120
    }
})

export default WorksHomeScreen
