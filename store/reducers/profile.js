import { FETCH_PROFILE } from '../actions/profile';
import { FETCH_USER_LISTS } from '../actions/profile';

const initialState = {
  profile: {},
  userLists: [],
};

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

    default:
      return state;
  }
};
