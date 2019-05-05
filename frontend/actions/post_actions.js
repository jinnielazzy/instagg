import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiceAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: posts
  }
}

export const receicePost = post => {
  return {
    type: RECEIVE_POST,
    post: post
  }
}

export const removePost = id => {
  return {
    type: REMOVE_POST,
    postId: postId
  }
}

export const receivePostErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors: errors
  }
}

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchAllPosts().then(
    (posts) => dispatch(receiceAllPosts(posts)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const fetchPost = (id) => dispatch => {
  return PostAPIUtil.fetchPost(id).then(
    (post) => dispatch(receicePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const createPost = (post) => dispatch => {
  return PostAPIUtil.createPost(post).then(
    (post) => dispatch(receivePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const updatePost = (post) => dispatch => {
  return PostAPIUtil.updatePost(post).then(
    (post) => dispatch(receivePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const deletePost = (id) => dispatch => {
  return PostAPIUtil.deletePost(id).then(
    (id) => dispatch(removePost(id)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

// not sure if needed in re-rendering component
// export const removeErrors = () => dispatch => {
//   return dispatch(receivePostErrors([]))
// }