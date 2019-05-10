import { RECEIVE_ALL_POSTS } from "../actions/post_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from "../actions/comment_action";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS: 
      return merge({}, state, action.comments)
    case RECEIVE_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment });
      return newState;
    case REMOVE_COMMENT:
    default:
      return state;
  }
};

export default commentsReducer;