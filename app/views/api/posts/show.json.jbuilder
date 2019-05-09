json.extract! @post, :id, :caption
json.photoUrl url_for(@post.photo)
json.author @post.user.username

# post's creater's profile
# post's created time
# post's creater
# post's like
# post's url

# post's comments
#  each comment creater, comment body