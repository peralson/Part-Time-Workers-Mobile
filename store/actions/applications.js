export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS'

export const fetchApplications = userId => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        // const response = await fetch(
        //     `https://us-central1-partime-60670.cloudfunctions.net/api/job/event/${userId}`,
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application.json',
        //             'Authorization': `Bearer ${token}`
        //         }
        //     }
        // )

        const response = {
          "id": 49384,
          "state": "acepted",
          "offerId": "hOz2u0cC3EJnPoEwmzKP",
          "userId": "userid"
        }

        const resData = await response.json()

        let entry = resData.body

        if (resData.error && resData.body === "We could not find any offer with this user_id") {
            entry = []
        }
        
        dispatch({
            type: FETCH_APPLICATIONS,
            data: entry,
            projectId: userId
        })
    }
}