import { RECEIVE_POST, RECEIVE_POST_ERRORS } from "../actions/post_actions";

const postsErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POST:
      return [];
    case RECEIVE_POST_ERRORS:
      return action.errors
    default:
      return state;
  }
};

export default postsErrorsReducer;