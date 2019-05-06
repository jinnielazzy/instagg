import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment: comment
  }
};

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    commentId: comment.id
  }
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)))
}

export const deleteComment = id => dispatch => {
  return CommentAPIUtil.deleteComment(id).then(
    (comment) => dispatch(removeComment(comment)))
}