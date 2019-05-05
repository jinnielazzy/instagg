import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
  // likes
  // comments
  // follows
})

export default entitiesReducer;