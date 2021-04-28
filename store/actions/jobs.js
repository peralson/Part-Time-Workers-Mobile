// Actions
export const FETCH_JOBS = 'FETCH_JOBS';

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
		 			'Content-Type': 'application.json',
		 			'Authorization': `Bearer ${token}`
		 		}
		 	}
		)
		
		const resData = await response.json()

		const loadedJobs = []

		if (resData.body !== "We could not find any job") {
			resData.body.map(job => {
				loadedJobs.push(
					new Job(
					   	job.jobData.id_offer,
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
		}

		dispatch({
			type: FETCH_JOBS,
			userJobs: loadedJobs
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
					'Content-Type': 'application.json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

		const resData = await response.json()

		console.log(resData)
	}
}