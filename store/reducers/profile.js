import {
	FETCH_PROFILE,
	FETCH_USER_LISTS
} from '../actions/profile'

const initialState = {
	profile: {},
	userLists: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return {
				...state,
				profile: action.profile
			}


        case FETCH_USER_LISTS: {
            console.log(action.userLists)
            return {
				...state,
				userLists: action.userLists
			}
        }

        
        default:
            return state;
    }
};
