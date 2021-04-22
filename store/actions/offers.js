// Actions
export const FETCH_OPEN_OFFERS = 'FETCH_OPEN_OFFERS'

// Models for fetching
import Offer from '../../models/Offer'

export const fetchOpenOffers = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        const response = await fetch(
            'https://us-central1-partime-60670.cloudfunctions.net/api/offer/myOffers',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application.json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        const resData = await response.json()

        const loadedOffers = []

        await resData.body.map(offer => {
            loadedOffers.push(
                new Offer(
                    offer.id,
                    offer.data.eventData.name,
                    offer.data.offerData.category,
                    offer.data.eventData.location,
                    offer.data.eventData.date,
                    offer.data.eventData.description,
                    offer.data.offerData.description,
                    offer.data.offerData.qty,
                    offer.data.offerData.already_assigned,
                    offer.data.offerData.schedule,
                    offer.data.offerData.salary,
                    offer.data.offerData.extraSalary,
                )
            )
        })

        const sortedOffers = loadedOffers.sort((a, b) => {
            if (a.date < b.date) {
                return -1
            }
            if (a.date < b.date) {
                return 1
            }
            return 0
        })

        dispatch({
            type: FETCH_OPEN_OFFERS,
            userOpenOffers: sortedOffers
        })
    }
}