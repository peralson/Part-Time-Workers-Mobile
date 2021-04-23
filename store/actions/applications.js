// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS'
export const SEND_APPLICATIONS = 'SEND_APPLICATION'
export const CANCEL_APPLICATIONS = 'CANCEL_APPLICATION'

// Models for fetching
import Application from '../../models/Application'

export const fetchApplications = userId => {
  return async (dispatch, getState) => {

    //TODO conectar a firebase

    const loadedApplications = []

    loadedApplications.push(
      new Application(49384, 'pending', 'hOz2u0cC3EJnPoEwmzKP', 'userid')
    )

    dispatch({
      type: FETCH_APPLICATIONS,
      userApplications: loadedApplications,
    })
  }
}

export const sendApplication = offerId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    const response = await fetch(
        `https://us-central1-partime-60670.cloudfunctions.net/api/application/apply/${offerId}`,
        {
            method: 'POST',
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

export const cancelApplication = applicationId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    const response = await fetch(
        `https://us-central1-partime-60670.cloudfunctions.net/api/application/${applicationId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application.json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              "action": "deny"
            })
        }
    )

    const resData = await response.json()

    console.log(resData)
  }
}
