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
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post1.jpg")
user1.photo.attach(io: file, filename: 'profile.png')

user2 = User.create(username: 'jinbot', password: 'password', bio: 'this is jinbot')
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
user2.photo.attach(io: file, filename: 'profile.png')

user3 = User.create(username: 'ohyeah', password: 'password', bio: 'this is jinbot')
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post10.jpg")
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

post1 = Post.new(caption: 'Street food!!', user_id: user1.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post10.jpg")
post1.photo.attach(io: file, filename: 'post1.png')
post1.save

post2 = Post.new(caption: 'SO AWESOME, I GOT IT', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/mHd33ZNRaEoxQAUw6fidhXoV")
post2.photo.attach(io: file, filename: 'post2.png')
post2.save

post3 = Post.new(caption: '', user_id: user1.id)
file = open("https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/seamaster.jpg")
post3.photo.attach(io: file, filename: 'post3.png')
post3.save

post4 = Post.new(caption: 'ROSE ROSE', user_id: user1.id)
file = open("https://shuttr-dev-seeds.s3-us-west-1.amazonaws.com/tent.jpg")
post4.photo.attach(io: file, filename: 'post4.png')
post4.save

post5 = Post.new(caption: 'Come and visit, Im in USC', user_id: user1.id)
file = open("https://s3-us-west-1.amazonaws.com/instagg-dev/78CwnzqzVA5cM81qifafeD6E")
post5.photo.attach(io: file, filename: 'post5.png')
post5.save

post6 = Post.new(caption: 'Fowlers!!', user_id: user2.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post1.jpg")
post6.photo.attach(io: file, filename: 'post6.png')
post6.save

post7 = Post.new(caption: 'Cutie!!!', user_id: user2.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post2.jpg")
post7.photo.attach(io: file, filename: 'post7.png')
post7.save

post8 = Post.new(caption: '', user_id: user2.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post3.jpg")
post8.photo.attach(io: file, filename: 'post8.png')
post8.save

post9 = Post.new(caption: 'Lotus', user_id: user2.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post4.jpg")
post9.photo.attach(io: file, filename: 'post9.png')
post9.save

post10 = Post.new(caption: '', user_id: user3.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post5.jpg")
post10.photo.attach(io: file, filename: 'post10.png')
post10.save

post11 = Post.new(caption: 'Sunset!!! So nice', user_id: user3.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post6.jpg")
post11.photo.attach(io: file, filename: 'post11.png')
post11.save

post12 = Post.new(caption: 'Im in Japan', user_id: user3.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post7.jpg")
post12.photo.attach(io: file, filename: 'post12.png')
post12.save

post13 = Post.new(caption: 'Vivid', user_id: user4.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post8.jpg")
post13.photo.attach(io: file, filename: 'post13.png')
post13.save

post14 = Post.new(caption: 'In New York', user_id: user4.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post9.jpg")
post14.photo.attach(io: file, filename: 'post14.png')
post14.save

post15 = Post.new(caption: '', user_id: user4.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post10.jpg")
post15.photo.attach(io: file, filename: 'post15.png')
post15.save

post16 = Post.new(caption: '', user_id: user5.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post11.jpg")
post16.photo.attach(io: file, filename: 'post16.png')
post16.save

post17 = Post.new(caption: '', user_id: user5.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post12.jpg")
post17.photo.attach(io: file, filename: 'post17.png')
post17.save

post18 = Post.new(caption: '', user_id: user5.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post13.jpg")
post18.photo.attach(io: file, filename: 'post18.png')
post18.save

post19 = Post.new(caption: '', user_id: user6.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post14.jpg")
post19.photo.attach(io: file, filename: 'post19.png')
post19.save

post20 = Post.new(caption: '', user_id: user6.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post15.jpg")
post20.photo.attach(io: file, filename: 'post20.png')
post20.save

post21 = Post.new(caption: '', user_id: user6.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post16.jpg")
post21.photo.attach(io: file, filename: 'post21.png')
post21.save

post22 = Post.new(caption: '', user_id: user7.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post17.jpg")
post22.photo.attach(io: file, filename: 'post22.png')
post22.save

post23 = Post.new(caption: '', user_id: user8.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post18.jpg")
post23.photo.attach(io: file, filename: 'post23.png')
post23.save

post24 = Post.new(caption: '', user_id: user9.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post19.jpg")
post24.photo.attach(io: file, filename: 'post24.png')
post24.save

post25 = Post.new(caption: 'So nice the view', user_id: user10.id)
file = open("https://instagg-dev.s3-us-west-1.amazonaws.com/post20.jpg")
post25.photo.attach(io: file, filename: 'post25.png')
post25.save

comment1 = Comment.create(user_id: user2.id, post_id: post1.id, body: "This is nice")
comment2 = Comment.create(user_id: user3.id, post_id: post1.id, body: "oh yeah.")
comment3 = Comment.create(user_id: user5.id, post_id: post1.id, body: "Comment here.")
comment4 = Comment.create(user_id: user6.id, post_id: post1.id, body: "Im good.")
comment5 = Comment.create(user_id: user10.id, post_id: post1.id, body: "So Posts.")
comment6 = Comment.create(user_id: user3.id, post_id: post2.id, body: "HAHA.")
comment7 = Comment.create(user_id: user4.id, post_id: post2.id, body: "666.")
comment8 = Comment.create(user_id: user7.id, post_id: post2.id, body: "U got this.")
comment9 = Comment.create(user_id: user8.id, post_id: post2.id, body: "Nice pic.")
comment10 = Comment.create(user_id: user2.id, post_id: post3.id, body: "Good photo.")
comment11 = Comment.create(user_id: user3.id, post_id: post3.id, body: "Handsome.")
comment12 = Comment.create(user_id: user4.id, post_id: post3.id, body: "GOOD.")
comment13 = Comment.create(user_id: user8.id, post_id: post3.id, body: "Wish u best")
comment14 = Comment.create(user_id: user2.id, post_id: post4.id, body: "I dont know what it is")
comment15 = Comment.create(user_id: user8.id, post_id: post4.id, body: "Long time no see")
comment16 = Comment.create(user_id: user9.id, post_id: post4.id, body: "pretty")
comment17 = Comment.create(user_id: user10.id, post_id: post4.id, body: "This is good")
comment18 = Comment.create(user_id: user5.id, post_id: post5.id, body: "+1")
comment19 = Comment.create(user_id: user7.id, post_id: post5.id, body: "+2")
comment20 = Comment.create(user_id: user8.id, post_id: post5.id, body: "+3")
comment21 = Comment.create(user_id: user9.id, post_id: post5.id, body: "+4")
comment22 = Comment.create(user_id: user10.id, post_id: post5.id, body: "+5")
comment23 = Comment.create(user_id: user3.id, post_id: post6.id, body: "so good, u dope")
comment24 = Comment.create(user_id: user4.id, post_id: post6.id, body: "nice spot")
comment25 = Comment.create(user_id: user7.id, post_id: post6.id, body: "chill~~")
comment26 = Comment.create(user_id: user10.id, post_id: post6.id, body: "hello, fellow")
comment26 = Comment.create(user_id: user3.id, post_id: post7.id, body: "u r so good")
comment27 = Comment.create(user_id: user6.id, post_id: post7.id, body: "top artist")
comment28 = Comment.create(user_id: user7.id, post_id: post7.id, body: "dope post")
comment29 = Comment.create(user_id: user1.id, post_id: post8.id, body: "hahaha")
comment30 = Comment.create(user_id: user3.id, post_id: post8.id, body: "awesome!")
comment31 = Comment.create(user_id: user5.id, post_id: post8.id, body: "dope~~")
comment32 = Comment.create(user_id: user7.id, post_id: post8.id, body: "lol")
comment33 = Comment.create(user_id: user8.id, post_id: post8.id, body: "@___@")
comment34 = Comment.create(user_id: user9.id, post_id: post8.id, body: "nice!")
comment35 = Comment.create(user_id: user10.id, post_id: post8.id, body: "lmao")
comment36 = Comment.create(user_id: user1.id, post_id: post10.id, body: "hahahahaha")
comment37 = Comment.create(user_id: user2.id, post_id: post10.id, body: "GG")
comment38 = Comment.create(user_id: user1.id, post_id: post11.id, body: "you r so good")
comment39 = Comment.create(user_id: user2.id, post_id: post11.id, body: "you r so nice")
comment40 = Comment.create(user_id: user4.id, post_id: post11.id, body: "you r so dope")
comment41 = Comment.create(user_id: user5.id, post_id: post11.id, body: "you r so cool")
comment42 = Comment.create(user_id: user4.id, post_id: post12.id, body: "this is a nice post")
comment43 = Comment.create(user_id: user5.id, post_id: post12.id, body: "NICE!!")
comment44 = Comment.create(user_id: user6.id, post_id: post12.id, body: "COOL!!")
comment45 = Comment.create(user_id: user8.id, post_id: post12.id, body: "long time no see!!")
comment46 = Comment.create(user_id: user10.id, post_id: post12.id, body: "IG WIN!!")
comment46 = Comment.create(user_id: user1.id, post_id: post13.id, body: "Random comment")
comment47 = Comment.create(user_id: user2.id, post_id: post13.id, body: "so chilled")
comment48 = Comment.create(user_id: user5.id, post_id: post13.id, body: "manificant")
comment49 = Comment.create(user_id: user7.id, post_id: post13.id, body: "u look good")
comment50 = Comment.create(user_id: user8.id, post_id: post13.id, body: "how are u")
comment51 = Comment.create(user_id: user9.id, post_id: post13.id, body: "DOPE")
comment52 = Comment.create(user_id: user10.id, post_id: post13.id, body: "HAHAHA")
comment53 = Comment.create(user_id: user1.id, post_id: post14.id, body: "this is soooo good")
comment54 = Comment.create(user_id: user5.id, post_id: post14.id, body: "i dont what to say")
comment55 = Comment.create(user_id: user8.id, post_id: post14.id, body: "where u got this")
comment56 = Comment.create(user_id: user10.id, post_id: post14.id, body: "cool")
comment57 = Comment.create(user_id: user10.id, post_id: post16.id, body: "COOL AF")
comment58 = Comment.create(user_id: user3.id, post_id: post17.id, body: "nice post")
comment59 = Comment.create(user_id: user8.id, post_id: post17.id, body: "^___^")
comment60 = Comment.create(user_id: user9.id, post_id: post17.id, body: "chillin")
comment61 = Comment.create(user_id: user2.id, post_id: post18.id, body: "nice post")
comment62 = Comment.create(user_id: user8.id, post_id: post18.id, body: "awesome!!!")
comment63 = Comment.create(user_id: user9.id, post_id: post18.id, body: "good vide")
comment64 = Comment.create(user_id: user10.id, post_id: post18.id, body: "how r u")
comment65 = Comment.create(user_id: user3.id, post_id: post20.id, body: "dope af")
comment66 = Comment.create(user_id: user4.id, post_id: post20.id, body: "hangout sometime with me too")
comment67 = Comment.create(user_id: user8.id, post_id: post20.id, body: "$$$$$$")
comment68 = Comment.create(user_id: user9.id, post_id: post20.id, body: "hangout sometime")
comment69 = Comment.create(user_id: user10.id, post_id: post20.id, body: "chillin")
comment70 = Comment.create(user_id: user9.id, post_id: post21.id, body: "HAHAHA")
comment71 = Comment.create(user_id: user10.id, post_id: post21.id, body: "why im put this")
comment72 = Comment.create(user_id: user1.id, post_id: post22.id, body: "hangout plz")
comment73 = Comment.create(user_id: user2.id, post_id: post22.id, body: "lets code")
comment74 = Comment.create(user_id: user3.id, post_id: post22.id, body: "nice instagg")
comment75 = Comment.create(user_id: user5.id, post_id: post22.id, body: "this app is cool")
comment76 = Comment.create(user_id: user6.id, post_id: post22.id, body: "hit me up")
comment77 = Comment.create(user_id: user8.id, post_id: post22.id, body: "chill chill chill")
comment78 = Comment.create(user_id: user10.id, post_id: post22.id, body: "im nextby")
comment79 = Comment.create(user_id: user1.id, post_id: post23.id, body: "whatever man")
comment80 = Comment.create(user_id: user2.id, post_id: post23.id, body: "dude u dope")
comment81 = Comment.create(user_id: user1.id, post_id: post24.id, body: "learn java!!")
comment82 = Comment.create(user_id: user4.id, post_id: post24.id, body: "be rich soon")
comment83 = Comment.create(user_id: user5.id, post_id: post24.id, body: "feel better")
comment84 = Comment.create(user_id: user6.id, post_id: post24.id, body: "take care of urself")
comment85 = Comment.create(user_id: user8.id, post_id: post24.id, body: "LOLLLL")
comment86 = Comment.create(user_id: user2.id, post_id: post25.id, body: "leetcode more")
comment87 = Comment.create(user_id: user3.id, post_id: post25.id, body: "practice algorithms")
comment88 = Comment.create(user_id: user4.id, post_id: post25.id, body: "bfs/dfs important")
comment89 = Comment.create(user_id: user5.id, post_id: post25.id, body: "why no meaningful comments")

like1 = Like.create(user_id: user2.id, post_id: post1.id)
like2 = Like.create(user_id: user3.id, post_id: post1.id)
like3 = Like.create(user_id: user2.id, post_id: post2.id)
like4 = Like.create(user_id: user3.id, post_id: post2.id)
like5 = Like.create(user_id: user4.id, post_id: post2.id)
like6 = Like.create(user_id: user5.id, post_id: post2.id)
like7 = Like.create(user_id: user6.id, post_id: post2.id)
like8 = Like.create(user_id: user3.id, post_id: post3.id)
like9 = Like.create(user_id: user4.id, post_id: post3.id)
like10 = Like.create(user_id: user5.id, post_id: post3.id)
like11 = Like.create(user_id: user8.id, post_id: post3.id)
like12 = Like.create(user_id: user7.id, post_id: post5.id)
like13 = Like.create(user_id: user8.id, post_id: post5.id)
like14 = Like.create(user_id: user1.id, post_id: post6.id)
like15 = Like.create(user_id: user3.id, post_id: post6.id)
like16 = Like.create(user_id: user4.id, post_id: post6.id)
like17 = Like.create(user_id: user5.id, post_id: post6.id)
like18 = Like.create(user_id: user6.id, post_id: post6.id)
like19 = Like.create(user_id: user7.id, post_id: post6.id)
like20 = Like.create(user_id: user8.id, post_id: post6.id)
like21 = Like.create(user_id: user9.id, post_id: post6.id)
like22 = Like.create(user_id: user10.id, post_id: post6.id)
like23 = Like.create(user_id: user1.id, post_id: post7.id)
like24 = Like.create(user_id: user3.id, post_id: post7.id)
like25 = Like.create(user_id: user4.id, post_id: post7.id)
like26 = Like.create(user_id: user5.id, post_id: post7.id)
like27 = Like.create(user_id: user6.id, post_id: post7.id)
like28 = Like.create(user_id: user7.id, post_id: post7.id)
like29 = Like.create(user_id: user8.id, post_id: post7.id)
like30 = Like.create(user_id: user9.id, post_id: post7.id)
like31 = Like.create(user_id: user10.id, post_id: post7.id)
like32 = Like.create(user_id: user1.id, post_id: post8.id)
like33 = Like.create(user_id: user3.id, post_id: post8.id)
like34 = Like.create(user_id: user5.id, post_id: post8.id)
like35 = Like.create(user_id: user9.id, post_id: post8.id)
like36 = Like.create(user_id: user10.id, post_id: post8.id)
like37 = Like.create(user_id: user1.id, post_id: post9.id)
like38 = Like.create(user_id: user4.id, post_id: post9.id)
like39 = Like.create(user_id: user5.id, post_id: post9.id)
like40 = Like.create(user_id: user8.id, post_id: post9.id)
like41 = Like.create(user_id: user1.id, post_id: post10.id)
like42 = Like.create(user_id: user2.id, post_id: post10.id)
like43 = Like.create(user_id: user5.id, post_id: post10.id)
like44 = Like.create(user_id: user4.id, post_id: post11.id)
like45 = Like.create(user_id: user6.id, post_id: post11.id)
like46 = Like.create(user_id: user7.id, post_id: post11.id)
like47 = Like.create(user_id: user9.id, post_id: post12.id)
like48 = Like.create(user_id: user10.id, post_id: post12.id)
like49 = Like.create(user_id: user1.id, post_id: post13.id)
like50 = Like.create(user_id: user2.id, post_id: post13.id)
like51 = Like.create(user_id: user4.id, post_id: post13.id)
like52 = Like.create(user_id: user5.id, post_id: post13.id)
like53 = Like.create(user_id: user6.id, post_id: post13.id)
like54 = Like.create(user_id: user7.id, post_id: post13.id)
like55 = Like.create(user_id: user8.id, post_id: post13.id)
like56 = Like.create(user_id: user1.id, post_id: post15.id)
like57 = Like.create(user_id: user5.id, post_id: post15.id)
like58 = Like.create(user_id: user1.id, post_id: post16.id)
like59 = Like.create(user_id: user3.id, post_id: post16.id)
like60 = Like.create(user_id: user6.id, post_id: post16.id)
like61 = Like.create(user_id: user7.id, post_id: post16.id)
like62 = Like.create(user_id: user9.id, post_id: post16.id)
like63 = Like.create(user_id: user6.id, post_id: post17.id)
like64 = Like.create(user_id: user7.id, post_id: post17.id)
like65 = Like.create(user_id: user8.id, post_id: post17.id)
like66 = Like.create(user_id: user9.id, post_id: post17.id)
like67 = Like.create(user_id: user1.id, post_id: post18.id)
like68 = Like.create(user_id: user3.id, post_id: post18.id)
like69 = Like.create(user_id: user4.id, post_id: post18.id)
like70 = Like.create(user_id: user6.id, post_id: post18.id)
like71 = Like.create(user_id: user8.id, post_id: post18.id)
like72 = Like.create(user_id: user1.id, post_id: post19.id)
like73 = Like.create(user_id: user2.id, post_id: post19.id)
like74 = Like.create(user_id: user4.id, post_id: post19.id)
like75 = Like.create(user_id: user7.id, post_id: post19.id)
like76 = Like.create(user_id: user8.id, post_id: post19.id)
like77 = Like.create(user_id: user10.id, post_id: post19.id)
like78 = Like.create(user_id: user1.id, post_id: post20.id)
like79 = Like.create(user_id: user3.id, post_id: post20.id)
like80 = Like.create(user_id: user4.id, post_id: post20.id)
like81 = Like.create(user_id: user7.id, post_id: post20.id)
like82 = Like.create(user_id: user8.id, post_id: post20.id)
like83 = Like.create(user_id: user9.id, post_id: post20.id)
like84 = Like.create(user_id: user6.id, post_id: post21.id)
like85 = Like.create(user_id: user8.id, post_id: post21.id)
like86 = Like.create(user_id: user9.id, post_id: post21.id)
like87 = Like.create(user_id: user10.id, post_id: post21.id)
like88 = Like.create(user_id: user1.id, post_id: post22.id)
like89 = Like.create(user_id: user2.id, post_id: post22.id)
like90 = Like.create(user_id: user3.id, post_id: post22.id)
like91 = Like.create(user_id: user4.id, post_id: post22.id)
like92 = Like.create(user_id: user5.id, post_id: post22.id)
like93 = Like.create(user_id: user6.id, post_id: post22.id)
like94 = Like.create(user_id: user8.id, post_id: post22.id)
like95 = Like.create(user_id: user9.id, post_id: post22.id)
like96 = Like.create(user_id: user1.id, post_id: post23.id)
like97 = Like.create(user_id: user2.id, post_id: post23.id)
like98 = Like.create(user_id: user3.id, post_id: post23.id)
like99 = Like.create(user_id: user4.id, post_id: post23.id)
like100 = Like.create(user_id: user5.id, post_id: post23.id)
like101 = Like.create(user_id: user6.id, post_id: post23.id)
like102 = Like.create(user_id: user9.id, post_id: post23.id)
like103 = Like.create(user_id: user10.id, post_id: post23.id)
like104 = Like.create(user_id: user1.id, post_id: post24.id)
like105 = Like.create(user_id: user3.id, post_id: post24.id)
like106 = Like.create(user_id: user4.id, post_id: post24.id)
like107 = Like.create(user_id: user6.id, post_id: post24.id)
like108 = Like.create(user_id: user8.id, post_id: post24.id)
like109 = Like.create(user_id: user10.id, post_id: post24.id)
like110 = Like.create(user_id: user5.id, post_id: post25.id)
like111 = Like.create(user_id: user6.id, post_id: post25.id)
like112 = Like.create(user_id: user7.id, post_id: post25.id)

follow1 = Follow.create(user_id: user1.id, follower_id: user2.id);
follow2 = Follow.create(user_id: user1.id, follower_id: user3.id);
follow3 = Follow.create(user_id: user1.id, follower_id: user4.id);
follow4 = Follow.create(user_id: user1.id, follower_id: user5.id);
follow5 = Follow.create(user_id: user1.id, follower_id: user6.id);
follow6 = Follow.create(user_id: user1.id, follower_id: user7.id);
follow7 = Follow.create(user_id: user2.id, follower_id: user1.id);
follow8 = Follow.create(user_id: user2.id, follower_id: user3.id);
follow9 = Follow.create(user_id: user2.id, follower_id: user4.id);
follow10 = Follow.create(user_id: user2.id, follower_id: user5.id);
follow11 = Follow.create(user_id: user2.id, follower_id: user7.id);
follow12 = Follow.create(user_id: user3.id, follower_id: user2.id);
follow13 = Follow.create(user_id: user3.id, follower_id: user4.id);
follow14 = Follow.create(user_id: user3.id, follower_id: user5.id);
follow15 = Follow.create(user_id: user3.id, follower_id: user6.id);
follow16 = Follow.create(user_id: user3.id, follower_id: user7.id);
follow17 = Follow.create(user_id: user4.id, follower_id: user1.id);
follow18 = Follow.create(user_id: user4.id, follower_id: user2.id);
follow19 = Follow.create(user_id: user4.id, follower_id: user5.id);
follow20 = Follow.create(user_id: user4.id, follower_id: user8.id);
follow21 = Follow.create(user_id: user4.id, follower_id: user9.id);
follow22 = Follow.create(user_id: user4.id, follower_id: user10.id);
follow23 = Follow.create(user_id: user5.id, follower_id: user1.id);
follow24 = Follow.create(user_id: user5.id, follower_id: user2.id);
follow25 = Follow.create(user_id: user5.id, follower_id: user4.id);
follow26 = Follow.create(user_id: user6.id, follower_id: user1.id);
follow27 = Follow.create(user_id: user6.id, follower_id: user2.id);
follow28 = Follow.create(user_id: user6.id, follower_id: user3.id);
follow29 = Follow.create(user_id: user6.id, follower_id: user4.id);
follow30 = Follow.create(user_id: user6.id, follower_id: user5.id);
follow31 = Follow.create(user_id: user6.id, follower_id: user7.id);
follow32 = Follow.create(user_id: user6.id, follower_id: user8.id);
follow33 = Follow.create(user_id: user7.id, follower_id: user1.id);
follow34 = Follow.create(user_id: user7.id, follower_id: user2.id);
follow35 = Follow.create(user_id: user7.id, follower_id: user3.id);
follow36 = Follow.create(user_id: user7.id, follower_id: user8.id);
follow37 = Follow.create(user_id: user8.id, follower_id: user2.id);
follow38 = Follow.create(user_id: user8.id, follower_id: user4.id);
follow39 = Follow.create(user_id: user8.id, follower_id: user7.id);
follow40 = Follow.create(user_id: user8.id, follower_id: user9.id);
follow41 = Follow.create(user_id: user8.id, follower_id: user10.id);
follow42 = Follow.create(user_id: user9.id, follower_id: user1.id);
follow43 = Follow.create(user_id: user9.id, follower_id: user2.id);
follow44 = Follow.create(user_id: user9.id, follower_id: user3.id);
follow45 = Follow.create(user_id: user9.id, follower_id: user4.id);
follow46 = Follow.create(user_id: user9.id, follower_id: user5.id);
follow47 = Follow.create(user_id: user9.id, follower_id: user6.id);
follow48 = Follow.create(user_id: user9.id, follower_id: user8.id);
follow49 = Follow.create(user_id: user10.id, follower_id: user1.id);
follow50 = Follow.create(user_id: user10.id, follower_id: user2.id);
follow51 = Follow.create(user_id: user10.id, follower_id: user4.id);
follow52 = Follow.create(user_id: user10.id, follower_id: user5.id);
follow53 = Follow.create(user_id: user10.id, follower_id: user9.id);