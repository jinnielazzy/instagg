import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow: follow
  }
};

export const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    followId: follow.id
  }
};

export const createFollow = follow => dispatch => {
  return FollowAPIUtil.createFollow(follow).then(
    (follow) => dispatch(receiveFollow(follow)))
}

export const deleteFollow = id => dispatch => {
  return FollowAPIUtil.deleteFollow(id).then(
    (follow) => dispatch(removeFollow(follow)))
}