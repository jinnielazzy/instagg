import { RECEIVE_SEARCH_USERS, RECEIVE_USER } from "../actions/user_action";
import merge from 'lodash/merge';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_USERS:
      return merge({}, action.searchedUsers);
    case RECEIVE_USER:
      return {};
    default:
      return state;
  }
};

export default searchReducer;