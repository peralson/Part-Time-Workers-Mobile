import { FETCH_OPEN_OFFERS } from '../actions/offers'
import { REMOVE_OFFER } from '../actions/applications'

const initialState = {
    openOffers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OPEN_OFFERS:
            return {
                openOffers: action.userOpenOffers
            }

        case REMOVE_OFFER:
            return {
                openOffers: state.openOffers.filter(
                    item => item.id !== action.offerId
                )
            }
        
        default:
            return state
    }
}