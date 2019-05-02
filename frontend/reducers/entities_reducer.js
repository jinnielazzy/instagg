import usersReducer from "./users_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  users: usersReducer
  // posts
  // likes
  // comments
  // follows
})

export default entitiesReducer;