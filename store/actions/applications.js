// Actions
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS'
export const SEND_APPLICATIONS = 'SEND_APPLICATION'
export const CANCEL_APPLICATIONS = 'CANCEL_APPLICATION'

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
                    'Content-Type': 'application.json',
                    'Authorization': `Bearer ${token}`
              	}
            }
        )

        const resData = await response.json()

        const loadedApplications = []

		if (resData.body !== "We could not find any application") {
			resData.body.map(application => {
				loadedApplications.push(
					new Application(
						application.applicationData.id_offer,
						application.offerData,
						application.eventData,
						application.companyData,
						application.applicationData
					)
				)
			})

			loadedApplications.sort((a, b) => {
				if (a.eventData.date < b.eventData.date) return -1
				if (a.eventData.date < b.eventData.date) return 1
				return 0
			})
		}

        dispatch({
			type: FETCH_APPLICATIONS,
			userApplications: loadedApplications
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
			`https://us-central1-partime-60670.cloudfunctions.net/api/application/${applicationId}?action=cancel`,
			{
				method: 'PUT',
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
