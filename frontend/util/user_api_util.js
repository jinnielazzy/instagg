export const fetchSearchUsers = (query) => {
  return $.ajax({
    url: `api/users/`,
    data: { query }
  })
}

export const fetchUser = id => {
  return $.ajax({
    url: `api/users/${id}`
  })
}

export const updateUser = user => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: "PATCH",
    data: user,
    contentType: false,
    processData: false
  })
}