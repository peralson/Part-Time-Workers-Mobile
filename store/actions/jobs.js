// Actions
export const FETCH_JOBS = 'FETCH_JOBS'

// Models for fetching
import Job from '../../models/Job'

export const fetchJobs = () => {
	return async (dispatch, getState) => {
		// const token = getState().auth.token

		// const response = await fetch(
		// 	`https://us-central1-partime-60670.cloudfunctions.net/api/job/myJobs`,
		// 	{
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application.json',
		// 			'Authorization': `Bearer ${token}`
		// 		}
		// 	}
		// )
		
		// const resData = await response.json()

		const loadedJobs = []

		// loadedJobs.push(
		//     new Job(
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
			type: FETCH_JOBS,
			userJobs: loadedJobs,
		})
	}
}