import { FETCH_JOBS, CANCEL_JOB } from '../actions/jobs';

const initialState = {
  userJobs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        userJobs: action.userJobs,
      };

    default:
      return state;
  }
};
