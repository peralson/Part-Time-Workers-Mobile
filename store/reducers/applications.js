import Application from '../../models/Application';
import { FETCH_APPLICATIONS, SEND_APPLICATIONS } from '../actions/applications'

const initialState = {
  userApplications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS:
      return {
        userApplications: action.userApplications
      }
  
    case SEND_APPLICATIONS:
      const newApplication = new Application(
        action.applicationId,
        action.offer.offerData,
        action.offer.eventData,
        action.offer.companyData,
        { id_offer: action.offerId }
      )
      return {
        userApplications: [...state.userApplications, newApplication]
      }
    default:
      return state
  }
};
