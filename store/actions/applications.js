// Actions
export const SEND_APPLICATIONS = 'SEND_APPLICATION'
export const FETCH_OPEN_APPLICATIONS = 'FETCH_OPEN_APPLICATIONS'

// Models for fetching
import Offer from '../../models/Offer'

export const fetchOpenApplications = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        const response = await fetch(
            `https://us-central1-partime-60670.cloudfunctions.net/api/application/myApplications`,
            {
                method: 'GET',
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
