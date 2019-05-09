@users.each do |user|
  # json.set! user.id do
  #     json.id user.id
  #     json.username user.username
  #     json.bio user.bio
  #     if user.photo.attached?
  #       json.profile url_for(user.photo)
  #     else
  #       json.profile ""
  #     end
  json.set! user.id do
    json.partial! "api/users/user", user: user
  end
      # json.followings do
      #   user.followings.each do |following|
      #     json.set! following.id do
      #       json.extract! :username
      #     end
      #   end
      # end

      # json.followers do
      #   user.followers.each do |follower|
      #     json.set! follower.id do
      #       json.extract! :username
      #     end
      #   end
      # end
  # end
end