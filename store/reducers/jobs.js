import { FETCH_JOBS } from '../actions/jobs'

const initialState = {
    userJobs: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                userJobs: action.userJobs
            }
          
        default:
          	return state
    }
}