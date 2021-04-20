import { FETCH_OPEN_OFFERS } from '../actions/offers'

const initialState = {
    openOffers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OPEN_OFFERS:
            return {
                ...state,
                openOffers: action.userOpenOffers
            }
        
        default:
            return state
    }
}