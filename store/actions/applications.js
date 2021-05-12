// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS'
export const SEND_APPLICATIONS = 'SEND_APPLICATION'
export const CANCEL_APPLICATIONS = 'CANCEL_APPLICATION'

// Libs
import sortByDate from '../../libs/sortByDate'

// Models for fetching
import Application from '../../models/Application'

export const fetchApplications = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        const response = await fetch(
            `https://us-central1-partime-60670.cloudfunctions.net/api/application/myApplications`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              	}
            }
        )

		if (!response.ok && response.status === 404) return []
    	if (!response.ok) throw new Error()

        const resData = await response.json()
        const loadedApplications = []
		
		resData.body.map(application => {
			loadedApplications.push(
				new Application(
					application.id,
					application.offerData,
					application.eventData,
					application.companyData,
					application.applicationData
				)
			)
		})

        dispatch({
			type: FETCH_APPLICATIONS,
			userApplications: sortByDate(loadedApplications, 'DES')
        })
    }
}

export const sendApplication = offerId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token
		const offer = getState().offers.openOffers.find(item => item.id === offerId)

		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/application/apply/${offerId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

    	if (!response.ok && response.status === 400) throw new Error('Ya has aplicado a esta oferta')
    	if (!response.ok) throw new Error('Ha ocurrido un error')

		const resData = await response.json()
		
		dispatch({
			type: SEND_APPLICATIONS,
			offerId: offerId,
			offer: offer,
			applicationId: resData.body
		})
	}
}

export const cancelApplication = applicationId => {
	return async (dispatch, getState) => {
		const token = getState().auth.token

		const response = await fetch(
			`https://us-central1-partime-60670.cloudfunctions.net/api/application/${applicationId}?action=cancel`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				}
			}
		)

    	if (!response.ok) throw new Error('Ha ocurrido un error')

		const resData = await response.json()

		dispatch({
			type: CANCEL_APPLICATIONS,
			applicationId: resData.body.id
		})
	}
}
