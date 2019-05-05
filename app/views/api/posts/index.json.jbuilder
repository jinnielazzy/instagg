json.array! @posts do |post|
  json.extract! post, :id, :caption
  json.photoUrl url_for(post.photo)
end