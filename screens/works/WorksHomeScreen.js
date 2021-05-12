// React
import React, { useState, useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { ScrollView, StyleSheet, View } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { fetchApplications } from '../../store/actions/applications'
import { fetchJobs } from '../../store/actions/jobs'

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

const WorksHomeScreen = ({ 
	navigation,
	userApplications,
	userJobs,
	fetchApplications,
	fetchJobs
}) => {
	const [applicationsLoading, setApplicationsLoading] = useState(true)
	const [jobsLoading, setJobsLoading] = useState(true)

	const loadApplications = async () => {
		try {
			await fetchApplications()
		} catch ({ message }) {
			console.log('error', message)
		}
	}

	const loadJobs = async () => {
		try {
			await fetchJobs()
		} catch ({ message }) {
			console.log('error', message)
		}
	}

	// Aseguramos que la pantalla repita el fetch cada vez que entre
	useFocusEffect(
		useCallback(() => {
			loadJobs()
			loadApplications()
		}, [setJobsLoading, setApplicationsLoading])
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
		navigation.navigate('ApplicationsStack', {
			screen: 'ApplicationDetail',
			params: {
				offerId: offerId,
				applicationId: applicationId
			}
		})
	}

	const jobDetailHandler = jobId => {
		navigation.navigate('WorksStack', {
			screen: 'WorkDetail',
			params: {
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
			<ScrollView
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<Label style={{ paddingHorizontal: 16, marginBottom: 8 }}>
					Próximos trabajos
				</Label>
				{jobsLoading ? <IsLoadingMini text="trabajos" /> : (
					<>
						{userJobs.length === 0 ? (
							<EmptyList
								quote='No tienes próximos trabajos'
								image={require('../../assets/sin_proyectos.png')}
							/>
						) : (
							<SideScrollPicker>
								{userJobs.map(job => (
									<JobItem
										key={job.id}
										{...job}
										onSelect={() => jobDetailHandler(job.id)}
									/>
								))}
							</SideScrollPicker>
						)}
					</>
				)}
				<View style={{ paddingHorizontal: 16 }}>
					<Label style={{ marginBottom: 8 }}>Ofertas a las que he aplicado</Label>
					{applicationsLoading ? <IsLoadingMini text="aplicaciones" /> : (
						<>
							{userApplications.length === 0 ? (
								<EmptyList
									quote='No tienes aplicaciones...'
									image={require('../../assets/sin_posiciones.png')}
									onApply={() => navigation.navigate('Home', { screen: 'Ofertas' })}
								/>
							) : (
								userApplications.map(application => (
									<OfferItem
										key={application.id}
										{...application}
										onSelect={() => applicationDetailHandler(application.id, application.id)}
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

const mapStateToProps = state => {
    return {
        userApplications: state.applications.userApplications,
		userJobs: state.jobs.userJobs
    }
}

const mapDispatchToProps = {
	fetchApplications,
	fetchJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(WorksHomeScreen)
