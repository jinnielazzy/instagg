import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  }
}

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

export const fetchComments = (id) => dispatch => {
  return CommentAPIUtil.fetchComments(id).then(
    (comments) => dispatch(receiveComments(comments))
  )
}

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)))
}

export const deleteComment = id => dispatch => {
  return CommentAPIUtil.deleteComment(id).then(
    (comment) => dispatch(removeComment(comment)))
}