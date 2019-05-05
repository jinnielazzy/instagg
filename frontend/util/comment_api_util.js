export const createComment = comment => {
  return $.ajax({
    url: `api/comments`,
    method: "PATCH",
    data: { comment }
  })
}

export const deleteComment = id => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: "DELETE"
  })
}