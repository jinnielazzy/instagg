import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_action";
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user.posts);
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState = merge({}, state, {[action.post.id]: action.post});
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId]
      return newState;
    default:
      return state;
  }
};

export default postsReducer;