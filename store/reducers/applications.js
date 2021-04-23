import { FETCH_APPLICATIONS } from '../actions/applications'

const initialState = {
  userApplications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS:
      return {
        ...state,
        userApplications: action.userApplications
      }
    // case DELETE_APPLICATION:
    //   return {
    //     ...state,
    //     myList: state.applications.filter((element) => element.id !== action.payload),
    //   }
    default:
      return state
  }
};
