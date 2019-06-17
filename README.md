# Insta-gg

[Live](http://insta-gg.herokuapp.com)

Insta-gg, an instagram clone website. This website allows users to view feed of their followings. Users can comment/uncomment, like/unlike those posts. Also, users can upload post, and delete their posts. Moreover, user could follow/unfollow other users, and edit their own profile pictures. And, in order to look for some user, users could perform searching by inputing query.

![](https://media.giphy.com/media/Q7q1sKclKWnLUfdiZb/giphy.gif)

### Technologies: 
Backend: rails, postgreSQL, aws; Frontend: React, Redux

Searching for user:
Users input search query, then result displays and userd can click on one of the results 
and jump that user's profile
![](https://media.giphy.com/media/MDlMr5jXfZasiijsvi/giphy.gif)
dispatch searching action
```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query) {
    if (this.state.query === "") {
      this.props.clearSearchUsers();
    } else {
      this.props.fetchSearchUsers(this.state.query);
      this.setState({
        display: true
      })
    }
  }
}  
```
Backend controller:
```ruby 
def index
  @users = User.where("lower(username) LIKE ?", "%#{params[:query].downcase}%")
end
```

Like/Unlike, Comment/Uncomment:

Users like, unlike, comment, uncomment the posts 

![](https://media.giphy.com/media/hrvemi6kEchA0c9oXw/giphy.gif)

dispatch actions
Like/Unlike: 
```javascript
const liker = likes.find(like => like.user_id === this.props.currentUser.id);
if (liker) {
  return <i className="fas fa-heart" onClick={() => this.props.deleteLike(liker)}></i>
} else {
  return <i className="far fa-heart" onClick={() => this.props.createLike({ post_id: post.id })}></i>      
}
```

Backend Controller
```ruby
def create
  @like = Like.new(like_params)
  @like.user_id = current_user.id
  
  if @like.save
    render :show
  else
    render json: @like.errors.full_messages, status: 401
  end
end

def destroy
  @like = Like.find_by(id: params[:id])

  if @like 
    @like.destroy
    render :show
  else
    render json: ["Can't unlike"], status: 401
  end
end
```

Comment/Uncommet:
```javascript
handleSubmit(e) {
  e.preventDefault();
  this.props.createComment(this.state);
  this.setState({
    body: ""
  })
}

if (this.props.currentUser.id === this.props.comment.user_id) {
  return (
    <div className="delete-comment">
      <i className="fas fa-backspace" onClick={() => this.props.deleteComment(this.props.comment.id)} ></i>
    </div>
  )
}
```
```ruby
def create
  @comment = Comment.new(comment_params)
  @comment.user_id = current_user.id

  if @comment.save
    render :show
  else
    render json: @comment.errors.full_messages, status: 422
  end
end

def destroy
  @comment = Comment.find_by(id: params[:id])
  if @comment 
    @comment.destroy
    render :show
  else
    render json: ["Can't uncomment"], status: 401
  end
end
```

Upload Post:

Users could click on upload pictures to upload post, caption is optional

![](https://media.giphy.com/media/J1AA5PnlevqxPp9fSU/giphy.gif)
dispatch upload action
```javascript
handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('post[caption]', this.state.body);
  if (this.state.photoFile) {
    formData.append('post[photo]', this.state.photoFile);
  }
  this.props.createPost(formData)
    .then(() => this.props.history.push('/posts'));
}

handleCaption(e) {
  this.setState(
    {
      body: e.currentTarget.value
    }
  )
}

handleFile(e) {
  const file = e.currentTarget.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    this.setState({
      photoFile: file, 
      photoUrl: reader.result
    })
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

Backend Controller
```ruby
def create
  @post = Post.new(post_params)
  @post.user_id = current_user.id
  if @post.save
    render :show  
  else
    render json: @post.errors.full_messages, status: 422
  end
end
```

Delete Post:

Users can delete their own posts if they don't want it 
![](https://media.giphy.com/media/gh0igmo27EkKMY4Wbk/giphy.gif)

dispatch delete action
```javascript
if (this.props.post.user_id === this.props.currentUser.id) {
  return (
    <i className="far fa-trash-alt" onClick={() => this.props.deletePost(this.props.post.id)}></i>
  )
}
```

Backend Controller
```ruby
def destroy
  @post = Post.find(params[:id])

  if @post.destroy
    render :show
  else
    render json: ['Post Not found'], status: 404
  end
end
```

Edit Profile:

Users could edit their profile bio, and picture. They are both optional
![](https://media.giphy.com/media/iIwFxZHpt0QUkMPM9N/giphy.gif)

dispatch edit action
```javascript
handleBio(e) {
    e.preventDefault();
    this.setState({
      bio: e.target.value
    })
  }

handleFile(e) {
  const file = e.currentTarget.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    this.setState({
      photoFile: file,
      photoUrl: reader.result
    })
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('user[bio]', this.state.bio);
  if (this.state.photoFile) {
    formData.append('user[photo]', this.state.photoFile);
  }
  this.props.updateUser(formData).then(() => this.props.history.push('/profile'));
}
```

Backend Controller
```ruby
def update
  @user = current_user
  if @user.update(user_params)
    render "api/users/show"
  else
    render json: @user.errors.full_messages, status: 422
  end
end
```