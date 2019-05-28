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
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/zHY2rYbiPANxRRh8SZnWRLYg")
user1.photo.attach(io: file, filename: 'profile.png')

user2 = User.create(username: 'jinbot', password: 'password', bio: 'this is jinbot')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
user2.photo.attach(io: file, filename: 'profile.png')

user3 = User.create(username: 'ohyeah', password: 'password', bio: 'this is jinbot')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/zU9HCgWNLkkvuoM3wxcsNuqf")
user3.photo.attach(io: file, filename: 'profile.png')

user4 = User.create(username: 'chris', password: 'password', bio: 'I love coding')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/iWMTqGk9Eet2DrG2YtsQHPoP")
user4.photo.attach(io: file, filename: 'profile.png')

user5 = User.create(username: 'fiona', password: 'password', bio: '')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/HSSQqjW7vCV4Uctq36PWmoQo")
user5.photo.attach(io: file, filename: 'profile.png')

user6 = User.create(username: 'atom', password: 'password', bio: 'atom says hi')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/H6ZVpaz8J4Bt9bBkfcHbe1oY")
user6.photo.attach(io: file, filename: 'profile.png')

user7 = User.create(username: 'Sheldon', password: 'password', bio: 'science is best')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/uz4QrHwv16cqAEzH629m73GB")
user7.photo.attach(io: file, filename: 'profile.png')

user8 = User.create(username: 'Wizard', password: 'password', bio: 'MAGIC!!!')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/Q1LDc96hjUtNz57YgGroHLyL")
user8.photo.attach(io: file, filename: 'profile.png')

user9 = User.create(username: 'Tony', password: 'password', bio: '')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/dY5mmnqcbCBuKbL24AM2JfPd")
user9.photo.attach(io: file, filename: 'profile.png')

user10 = User.create(username: 'Nikola', password: 'password', bio: 'Im pretty dope')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/pcqRQvd2csDEoFFYEiyyHYiz")
user10.photo.attach(io: file, filename: 'profile.png')

post1 = Post.create(caption: 'I LOVE USC!!', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/5szmwPBmH1rw5NjvQ8UDACXF")
post1.photo.attach(io: file, filename: 'post1.png')

post2 = Post.create(caption: 'I dont write caption', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/mHd33ZNRaEoxQAUw6fidhXoV")
post2.photo.attach(io: file, filename: 'post2.png')

post3 = Post.create(caption: '', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/PpdQXbNiCwkG4NcsbUXhpQJP")
post3.photo.attach(io: file, filename: 'post3.png')

post4 = Post.create(caption: 'HAHA', user_id: user2.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/EfSVmTTG2rupQBGHQNtfSiS9")
post4.photo.attach(io: file, filename: 'post4.png')

post5 = Post.create(caption: '', user_id: user2.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post5.photo.attach(io: file, filename: 'post5.png')

# post6 = Post.create(caption: '', user_id: user3.id)
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# # file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/xQWowxfLJ3AHM1ARou58kUdU")
# post6.photo.attach(io: file, filename: 'post6.png')
# # post6.save!

# post7 = Post.create(caption: '666', user_id: user4.id)
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# # file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# post7.photo.attach(io: file, filename: 'post7.png')
# # post7.save!

# post8 = Post.create(caption: '', user_id: user4.id)
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# # file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# post8.photo.attach(io: file, filename: 'post8.png')
# # post8.save!

# post9 = Post.create(caption: '', user_id: user4.id)
# file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# # file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
# post9.photo.attach(io: file, filename: 'post9.png')
# # post9.save!

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