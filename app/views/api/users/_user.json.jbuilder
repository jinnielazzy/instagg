json.user do 
  json.extract! user, :id, :username, :bio
  json.numFollowers user.followers.length
  json.numFollowings user.followings.length
  if user.photo.attached?
    json.profile url_for(user.photo)
  else
    json.profile ""
  end
end

# user's posts
#  each post, likers id, comments
json.posts do 
  user.posts.each do |post|
    json.set! post.id do 
      json.extract! post, :id, :caption, :user_id
      json.img_url url_for(post.photo)
      json.author post.user.username
    end
  end
end

json.followings do  
  user.followings_joint.each do |follow|
    json.set! follow.id do 
      json.extract! follow, :id, :user_id, :follower_id
    end
  end
end

json.followers do 
  user.followers_joint.each do |follow|
    json.set! follow.id do
      json.extract! follow, :id, :user_id, :follower_id
    end
  end
end


# user's followings
# user's followers
# json.followers user.followers 
# json.followings user.followings do |following|
#   json.id following.id
#   json.username following.username
# end

# json.followers user.followers do |follower|
#   json.id follower.id
#   json.username follower.username
# end