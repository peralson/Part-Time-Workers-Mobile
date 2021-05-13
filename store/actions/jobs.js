// Actions
export const FETCH_JOBS = 'FETCH_JOBS'
export const CHECK_JOB = 'CHECK_JOB'
export const CANCEL_JOB = 'CANCEL_JOB'

// Models for fetching
import Job from '../../models/Job'

export const fetchJobs = () => {
	return async (dispatch, getState) => {
		const token = getState().auth.token

		const response = await fetch(
		 	`https://us-central1-partime-60670.cloudfunctions.net/api/job/myJobs`,
		 	{
		 		method: 'GET',
		 		headers: {
		 			'Content-Type': 'application/json',
		 			'Authorization': `Bearer ${token}`
		 		}
		 	}
		)
		
		if (!response.ok && response.status === 404) return []
    	if (!response.ok) throw new Error()
		
		const resData = await response.json()
		const loadedJobs = []

		resData.body.map(job => {
			loadedJobs.push(
				new Job(
					job.id,
					job.offerData,
					job.eventData,
					job.companyData,
					job.jobData
				)
			)
		})

		loadedJobs.sort((a, b) => {
			if (a.eventData.date < b.eventData.date) return -1
			if (a.eventData.date < b.eventData.date) return 1
			return 0
		})

		dispatch({
			type: FETCH_JOBS,
			userJobs: loadedJobs
		})
	}
}

export const checkJob = eventId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token
		
		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/job/check`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					'id_event': eventId,
					'check': new Date().getTime()
				})
			}
		)

		if (!response.ok) throw new Error('Ha ocurrido un error')

		const resData = await response.json()
		
		dispatch({
			type: CHECK_JOB,
			eventId: eventId,
			newTask: resData.body.newStatus
		})
	}
}

export const cancelJob = jobId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token

		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/job/${jobId}?action=cancel`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

		if (!response.ok) throw new Error('Ha ocurrido un error')

		const resData = await response.json()

		console.log(resData)

		dispatch({
			type: CANCEL_JOB,
			jobId: jobId
		})
	}
}