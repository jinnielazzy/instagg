export const fetchComments = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}/comments`
  })
}


export const createComment = comment => {
  return $.ajax({
    url: `api/comments`,
    method: "POST",
    data: { comment }
  })
}

export const deleteComment = id => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: "DELETE"
  })
}