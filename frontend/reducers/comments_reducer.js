import { RECEIVE_ALL_POSTS, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from "../actions/comment_action";
import merge from 'lodash/merge';
import { RECEIVE_USER } from "../actions/user_action";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS: 
      return merge({}, state, action.comments)
    case RECEIVE_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment });
      return newState;''
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId]
      return newState;
    case REMOVE_POST: 
      let arr = Object.values(state).filter(comment => comment.post_id !== action.postId);
      newState = merge({}, arr);
      return newState;
    case RECEIVE_USER:
      let comments = {};

      if (action.user.user.posts) {
        Object.values(action.user.user.posts).forEach(post => {
          if (post.commentsLength) comments = merge(comments, post.comments);
        }); 
      }

      newState = merge(comments, state);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;