import {
	FETCH_JOBS,
	CHECK_JOB,
	CANCEL_JOB
} from '../actions/jobs'

const initialState = {
  	userJobs: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_JOBS:
			return {
				userJobs: action.userJobs,
			}

		case CANCEL_JOB:
			const cleanUserJobs = state.userJobs.filter(job => job.id !== action.jobId)
			return {
				userJobs: cleanUserJobs
			}

		case CHECK_JOB:
			const jobIndex = state.userJobs.findIndex(job => job.jobData.id_event === action.eventId)
			state.userJobs[jobIndex].jobData.status = action.newTask

		default:
			return state
	}
}
