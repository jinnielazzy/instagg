import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_action";
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, state, action.likes);
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]:action.like});
    case REMOVE_LIKE:
      newState = merge({}, state);
      delete newState[action.like.id]
      return newState;
    default:
      return state;
  }
}

export default likesReducer;