@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption
    json.photoUrl url_for(post.photo)
    # post's comments
    #  each comment creater, comment body
  end
  # post's creater's profile
  # post's created time
  # post's creater
  # post's like
  # post's url
end