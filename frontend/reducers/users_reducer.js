import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_action";
import merge from 'lodash/merge';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_action";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_USER:
      return merge({}, state, {[action.user.user.id]: action.user.user})
    case RECEIVE_FOLLOW:  
      newState = merge({}, state);
      newState[action.follow.follow.user_id].numFollowers++;
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, state);
      newState[action.follow.follow.user_id].numFollowers--;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;