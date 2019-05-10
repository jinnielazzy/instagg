import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes: likes
  }
}

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like: like
  }
};

export const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like: like
  }
};

export const fetchLikes = id => dispatch => {
  return LikeAPIUtil.fetchLikes(id).then(
    (likes) => dispatch(receiveLikes(likes))
  )
}


export const createLike = like => dispatch => {
  return LikeAPIUtil.createLike(like).then(
    (like) => dispatch(receiveLike(like)))
}

export const deleteLike = like => dispatch => {
  return LikeAPIUtil.deleteLike(like).then(
    (like) => dispatch(removeLike(like)))
}