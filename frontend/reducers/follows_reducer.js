import { RECEIVE_USER } from "../actions/user_action";
import { merge } from 'lodash';
import { REMOVE_FOLLOW, RECEIVE_FOLLOW } from "../actions/follow_action";

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user.followers, action.user.followings)
    case RECEIVE_FOLLOW:
      return merge({}, state, {[action.follow.follow.id] : action.follow.follow})
    case REMOVE_FOLLOW:
      newState = merge({}, state);
      delete newState[action.follow.follow.id];
      return newState;
    default:
      return state;
  }
}

export default followsReducer;