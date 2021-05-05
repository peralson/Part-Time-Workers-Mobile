import {
  FETCH_PROFILE,
  FETCH_USER_LISTS,
  UPDATE_PROFILE_GENERAL,
  UPDATE_PROFILE_LEGAL,
  UPDATE_PROFILE_TRANSPORT,
} from '../actions/profile';

const initialState = {
	profile: {},
	userLists: [],
};

//Models
import Profile from '../../models/Profile';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        profile: action.profile,
      };
    case FETCH_USER_LISTS: {
      return {
        ...state,
        userLists: action.userLists,
      };
    }
    case UPDATE_PROFILE_GENERAL:
      return {
        ...state,
        profile: action.updatedProfile,
      };

    case UPDATE_PROFILE_LEGAL:
      return {
        ...state,
        profile: action.updatedProfile,
      };

    case UPDATE_PROFILE_TRANSPORT:
      return {
        ...state,
        profile: action.updatedProfile,
      };
    default:
      return state;
  }
};
