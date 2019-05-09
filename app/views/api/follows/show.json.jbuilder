# follow's user_id, follower_id
json.follow do 
  json.extract! @follow, :id, :user_id, :follower_id
end 

# json.set user do  
#   json.extract!
    # json.numFollowers user.follows.length
# end