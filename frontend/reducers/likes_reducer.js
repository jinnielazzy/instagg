import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_action";
import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_USER } from "../actions/user_action";

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
    case REMOVE_POST:
      let arr = Object.values(state).filter(like => like.post_id !== action.postId);
      newState = merge({}, arr);
      return newState;
    case RECEIVE_USER:
      // debugger
      let likes = {};

      Object.values(action.user.user.posts).forEach(post => {
        if (post.likesLength) likes = merge(likes, post.likes);
      });

      newState = merge(likes, state);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default likesReducer;