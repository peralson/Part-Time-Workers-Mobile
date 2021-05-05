import { FETCH_APPLICATIONS } from '../actions/applications'

const initialState = {
  userApplications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS:
      return {
        userApplications: action.userApplications
      }
      
    default:
      return state
  }
};
