@comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body, :post_id, :user_id
      json.username comment.user.username
    end 
end