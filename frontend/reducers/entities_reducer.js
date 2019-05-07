import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import { combineReducers } from "redux";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  // likes
  // comments
  // follows
  searchUsers: searchReducer
})

export default entitiesReducer;