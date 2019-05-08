@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
    json.photoUrl url_for(post.photo)
    # post's comments
    # post's likes
    #  each comment creater, comment body
    json.author do
      json.username post.user.username
      json.profile url_for(post.user.photo)
    end
    json.likes post.likes
  end

  # post's creater's profile
  # post's created time
  # post's creater
end 
