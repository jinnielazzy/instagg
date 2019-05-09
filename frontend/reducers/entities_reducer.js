import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import { combineReducers } from "redux";
import searchReducer from "./search_reducer";
import followsReducer from "./follows_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  searchUsers: searchReducer,
  follows: followsReducer
})

export default entitiesReducer;