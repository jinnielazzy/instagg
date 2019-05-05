export const createFollow = follow => {
  return $.ajax({
    url: `api/follows`,
    method: "PATCH",
    data: { follow }
  })
}

export const deleteFollow = id => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: "DELETE"
  })
}