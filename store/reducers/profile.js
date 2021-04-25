import { FETCH_PROFILE } from '../actions/profile'

const initialState = {
    profile: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return {
                profile: action.profile
            }
        
        default:
            return state
    }
}