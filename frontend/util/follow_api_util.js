export const createFollow = follow => {
  return $.ajax({
    url: `api/follows`,
    method: "POST",
    data: { follow }
  })
}

export const deleteFollow = id => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: "DELETE"
  })
}