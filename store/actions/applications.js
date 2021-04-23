// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';

// Models for fetching
import Application from '../../models/Application';

export const fetchApplications = (userId) => {
  return async (dispatch, getState) => {

    //TODO conectar a firebase

    const loadedApplications = [];

    loadedApplications.push(
      new Application(49384, 'pending', 'hOz2u0cC3EJnPoEwmzKP', 'userid')
    );
    console.log(loadedApplications);
    dispatch({
      type: FETCH_APPLICATIONS,
      userApplications: loadedApplications,
    });
  }; 
};
