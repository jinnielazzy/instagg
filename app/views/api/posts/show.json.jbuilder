json.extract! @post, :id, :caption
json.photoUrl url_for(@post.photo)