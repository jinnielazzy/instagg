import { RECEIVE_SEARCH_USERS } from "../actions/user_action";
import merge from 'lodash/merge';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_USERS:
      return merge({}, action.searchedUsers);
    default:
      return state;
  }
};

export default searchReducer;