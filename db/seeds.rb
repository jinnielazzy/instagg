# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all
Comment.destroy_all
Follow.destroy_all 
Like.destroy_all

user1 = User.create(username: 'lizbot', password: 'password', bio: 'this is lizbot')
user2 = User.create(username: 'jinbot', password: 'password', bio: 'this is jinbot')
user3 = User.create(username: 'ohyeah', password: 'password', bio: 'this is jinbot')
user4 = User.create(username: 'fiona', password: 'password', bio: '')

post1 = Post.create(caption: 'I LOVE USC!!', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post1.photo.attach(io: file, filename: 'post1.png')
# post1.save!

post2 = Post.create(caption: 'I dont write caption', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/uzaquqjPfY6jq7n2i7qPNcxP")
post2.photo.attach(io: file, filename: 'post2.png')
# # post2.save!

post3 = Post.create(caption: '', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/jVB3JKrZTA9yikec5KGkntdR")
post3.photo.attach(io: file, filename: 'post3.png')
# post3.save!

post4 = Post.create(caption: 'HAHA', user_id: user2.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/pQD8qa9DhWCvbpUWK43JJh6a")
post4.photo.attach(io: file, filename: 'post4.png')
# post4.save!

post5 = Post.create(caption: '', user_id: user2.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post5.photo.attach(io: file, filename: 'post5.png')
# # post5.save!

post6 = Post.create(caption: '', user_id: user3.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/xQWowxfLJ3AHM1ARou58kUdU")
post6.photo.attach(io: file, filename: 'post6.png')
# post6.save!

post7 = Post.create(caption: '666', user_id: user4.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post7.photo.attach(io: file, filename: 'post7.png')
# post7.save!

post8 = Post.create(caption: '', user_id: user4.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post8.photo.attach(io: file, filename: 'post8.png')
# post8.save!

post9 = Post.create(caption: '', user_id: user4.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post9.photo.attach(io: file, filename: 'post9.png')
# post9.save!

# comment1 = Comment.create(user_id: user2.id, post_id: post1.id, body: "OMG, I go to school there! Hit me up.")
# comment2 = Comment.create(user_id: user3.id, post_id: post2.id, body: "oh yeah.")
# comment3 = Comment.create(user_id: user4.id, post_id: post2.id, body: "Comment here.")
# comment4 = Comment.create(user_id: user3.id, post_id: post3.id, body: "Im good.")
# comment5 = Comment.create(user_id: user4.id, post_id: post9.id, body: "I know.")
# comment6 = Comment.create(user_id: user1.id, post_id: post8.id, body: "HAHA.")
# comment7 = Comment.create(user_id: user2.id, post_id: post7.id, body: "666.")
# comment8 = Comment.create(user_id: user2.id, post_id: post6.id, body: "U got this.")
# comment9 = Comment.create(user_id: user3.id, post_id: post5.id, body: "Nice pic.")
# comment10 = Comment.create(user_id: user4.id, post_id: post9.id, body: "Good photo.")
# comment11 = Comment.create(user_id: user1.id, post_id: post3.id, body: "Handsome.")
# comment12 = Comment.create(user_id: user4.id, post_id: post4.id, body: "GOOD.")

# follow1 = Follow.create(user_id: user1.id, follower_id: user2.id);
# follow2 = Follow.create(user_id: user1.id, follower_id: user3.id);
# follow3 = Follow.create(user_id: user1.id, follower_id: user4.id);
# follow4 = Follow.create(user_id: user2.id, follower_id: user1.id);
# follow5 = Follow.create(user_id: user2.id, follower_id: user3.id);
# follow6 = Follow.create(user_id: user2.id, follower_id: user4.id);
# follow7 = Follow.create(user_id: user3.id, follower_id: user1.id);
# follow8 = Follow.create(user_id: user3.id, follower_id: user2.id);
# follow9 = Follow.create(user_id: user4.id, follower_id: user3.id);