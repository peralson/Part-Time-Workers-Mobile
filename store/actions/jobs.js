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

		loadedJobs.push(
			new Job(
			   '1',
				{
					category: 'Camarero',
					schedule: [{ start: { _seconds: 0 }, end: { _seconds: 100000 } }],
					salary: 12,
					extraSalary: 15,
					description: ''
				},
				{
					name: 'Chiringuito',
					location: { address: 'Tirso de Molina', lat: 37.915664368425624, lng: -4.809941902130738 },
					date: 1134561789,
					description: ''
				},
				{
					companyId: '1000',
					companyName: 'AJE Neemboo',
					companyImage: 'https://media-exp1.licdn.com/dms/image/C5603AQHPeEunkS-1TA/profile-displayphoto-shrink_800_800/0/1558198122304?e=1624492800&v=beta&t=v6bbkad-o517THcsB04G9x3Ypu6BE52lRoSD_CDfx4g'
				},
				{
					id: '100000',
					active: true
				}
			)
	   	)

		loadedJobs.push(
			new Job(
			   '2',
				{
					category: 'Camarero',
					schedule: [{ start: { _seconds: 0 }, end: { _seconds: 100000 } }],
					salary: 12,
					extraSalary: 15,
					description: 'Nada de malroyismo'
				},
				{
					name: 'Desayuno milagroso',
					location: { address: 'Plaza de Sol', lat: 37.915664368425624, lng: -4.809941902130738 },
					date: 1734561789,
					description: 'Se ha liado parda en la boda'
				},
				{
					companyId: '1000',
					companyName: 'AJE Neemboo',
					companyImage: 'https://media-exp1.licdn.com/dms/image/C5603AQHPeEunkS-1TA/profile-displayphoto-shrink_800_800/0/1558198122304?e=1624492800&v=beta&t=v6bbkad-o517THcsB04G9x3Ypu6BE52lRoSD_CDfx4g'
				},
				{
					id: '100000',
					active: false
				}
			)
	   	)

		dispatch({
			type: FETCH_JOBS,
			userJobs: loadedJobs
		})
	}
}