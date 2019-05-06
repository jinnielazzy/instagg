import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like: like
  }
};

export const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    likeId: like.id
  }
};

export const createLike = like => dispatch => {
  return LikeAPIUtil.createLike(like).then(
    (like) => dispatch(receiveLike(like)))
}

export const deleteLike = id => dispatch => {
  return LikeAPIUtil.deleteLike(id).then(
    (like) => dispatch(removeLike(like)))
}