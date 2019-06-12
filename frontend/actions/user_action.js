import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SEARCH_USERS = 'RECEIVE_SEARCH_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors: errors
  }
}

export const receiveSearchUsers = users => {
  return {
    type: RECEIVE_SEARCH_USERS, 
    searchedUsers: users
  }
}

export const fetchSearchUsers = (query) => dispatch => {
  return UserAPIUtil.fetchSearchUsers(query).then(
    (users) =>dispatch(receiveSearchUsers(users))
  )
}

export const clearSearchUsers = () => dispatch => {
  return dispatch(receiveSearchUsers({}))
}

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(
    (user) => dispatch(receiveUser(user)),
    (error) => dispatch(receiveUserErrors(error.responseJON))
  )
}

export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user).then(
    (user) => dispatch(receiveUser(user)),
    (error) => dispatch(receiveUserErrors(error.responseJON))
  )
}
