export const fetchAllPosts = () => {
  return $.ajax({
    url: `api/posts`
  })
}

export const fetchUserPosts = (id) => {
  return $.ajax({
    url: `api/users/${id}/posts`
  })
}

export const fetchPost = id => {
  return $.ajax({
    url: `api/posts/${id}`
  })
}

export const createPost = post => {
  return $.ajax({
    url: `api/posts`,
    method: "POST",
    data: post,
    contentType: false,
    processData: false
  })
}

export const updatePost = post => {
  return $.ajax({
    url: `api/posts/${post.id}`,
    method: "PATCH",
    data: post,
    contentType: false,
    processData: false
  })
}

export const deletePost = id => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: "DELETE"
  })
}
