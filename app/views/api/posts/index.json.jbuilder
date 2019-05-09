@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
    json.photoUrl url_for(post.photo)
    # post's comments

    # json.comments do
    #   post.comments.each do |comment|
    #     json.set! comment.id do
    #       json.extract! comment, :user_id, :body, :post_id
    #     end
    #   end
    # end
    # post's likes
    #  each comment creater, comment body
    json.author do
      json.username post.user.username
      json.profile url_for(post.user.photo)
    end

    json.likes post.likes do |like|
      json.id like.id
      json.username like.user.username
    end
  end
  # post's creater's profile
  # post's created time
  # post's creater
end 

# @posts.each do |post|
#   json.comments do
#     post.comments.each do |comment|
#       json.set! comment.id do
#         json.extract! comment, :user_id, :body, :post_id
#       end
#     end
#   end
# end