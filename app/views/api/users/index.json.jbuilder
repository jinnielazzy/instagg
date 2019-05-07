@users.each do |user|
  json.set! user.id do
      json.id user.id
      json.username user.username
      json.bio user.bio
  end
end