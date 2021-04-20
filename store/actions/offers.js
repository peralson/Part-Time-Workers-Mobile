// Actions
export const FETCH_OPEN_OFFERS = 'FETCH_OPEN_OFFERS'

// Models for fetching
import Offer from '../../models/Offer'

export const fetchOpenOffers = () => {
    return async dispatch => {
        const response = await fetch(
            'https://us-central1-partime-60670.cloudfunctions.net/api/offer',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application.json'
                }
            }
        )

        const resData = await response.json()

        const loadedOffers = []

        await resData.body.map(offer => {
            loadedOffers.push(
                new Offer(
                    offer.id,
                    offer.data.category,
                    { address: 'Poeta Alonso de Bonilla, 19, Córdoba, España' },
                    offer.data.date,
                    offer.data.description,
                    offer.data.qty,
                    offer.data.alreadyAssigned,
                    offer.data.schedule,
                    offer.data.salary,
                    offer.data.extraSalary,
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