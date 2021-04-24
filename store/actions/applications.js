// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS'
export const SEND_APPLICATIONS = 'SEND_APPLICATION'
export const CANCEL_APPLICATIONS = 'CANCEL_APPLICATION'

// Models for fetching
import Application from '../../models/Application'

export const fetchApplications = userId => {
	return async (dispatch, getState) => {
		// const token = getState().auth.token

		// const response = await fetch(
		// 	`https://us-central1-partime-60670.cloudfunctions.net/api/application/myApplications`,
		// 	{
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application.json',
		// 			'Authorization': `Bearer ${token}`
		// 		}
		// 	}
		// )
		
		// const resData = await response.json()

		const loadedApplications = []

		// loadedApplications.push(
		// 	new Application(
		// 		{
		// 			id: '123456',
		// 			category: 'Camarero',
		// 			qty: 2,
		// 			alreadyAssigned: 1,
		// 			schedule: [{ start: { _seconds: 0 }, end: { _seconds: 100000 } }],
		// 			salary: 12,
		// 			extraSalary: 15,
		// 			requirements: 'Nada de malroyismo'
		// 		},
		// 		{
		// 			name: 'Boda Isabel y Marcos',
		// 			location: { address: 'Poeta Paredes 50', lat: 40.200000, lng: -1.225543 },
		// 			date: 1234561789,
		// 			description: 'Se ha liado parda en la boda'
		// 		},
		// 		{
		// 			id: '1000',
		// 			name: 'AJE Neemboo',
		// 			image: ''
		// 		},
		// 		{
		// 			id: '100000'
		// 		}
		// 	)
		// )

		dispatch({
			type: FETCH_APPLICATIONS,
			userApplications: loadedApplications,
		})
	}
}

export const sendApplication = offerId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token

		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/application/apply/${offerId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application.json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

		const resData = await response.json()

		// TODO -> Add to State
	}
}

export const cancelApplication = applicationId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token

		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/application/${applicationId}?action=cancel`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application.json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

		const resData = await response.json()

		// TODO -> Add to State
	}
}
