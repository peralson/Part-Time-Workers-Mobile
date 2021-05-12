// Actions
export const FETCH_OPEN_OFFERS = 'FETCH_OPEN_OFFERS'

// Libs
import sortByDate from '../../libs/sortByDate'

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
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (!response.ok && response.status === 404) return []
        if (!response.ok) throw new Error()

        const resData = await response.json()
        const loadedOffers = []

        await resData.body.map(offer => {
            loadedOffers.push(
                new Offer(
                    offer.id,
                    offer.offerData,
                    offer.eventData,
                    offer.companyData
                )
            )
        })

        dispatch({
            type: FETCH_OPEN_OFFERS,
            userOpenOffers: sortByDate(loadedOffers, 'DES')
        })
    }
}