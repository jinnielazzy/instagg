@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
    json.img_url url_for(post.photo)
    
    json.author do
      json.username post.user.username
      json.profile url_for(post.user.photo)
    end

    json.likes post.likes.length
    json.created post.created_at
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