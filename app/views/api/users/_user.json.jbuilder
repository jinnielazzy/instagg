json.extract! user, :id, :username, :bio

# dont forgot user's profile photo
# user's posts
#  each post, likers id, comments
json.posts do 
  user.posts.each do |post|
    json.set! post.id do 
      json.extract! post, :id, :caption
      json.img_url url_for(post.photo)
    end
  end
end

if user.photo.attached?
  json.profile url_for(user.photo)
else
  json.profile ""
end

# user's followings
json.followings user.followings
json.followers user.followers
# user's followers