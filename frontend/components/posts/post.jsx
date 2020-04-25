import React from 'react';
import { Link } from 'react-router-dom';

class PostProfile extends React.Component {
  constructor(props) {
    super(props);

    // this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    // console.log("delete post")
    // console.log(this.props)
    // this.props.deletePost(this.props.post.id);
  }

  render() {
    const post = this.props.post;
    // const isCurrent = this.props.isCurrent;
    // const deletePost = this.props.deletePost;

    // const renderDelete = () => {
    //   if (isCurrent) return (
    //     <div className="delete-post">
    //       <button onClick={this.deletePost}>Delete</button>
    //     </div>
    //   )
    // }

    return (
      <div className="post-img">
        <Link to={`/users/${post.user_id}`}>
          <img src={post.img_url} />
          <div className="item-info">
            <div className="info-container">
              <div className="item-likes">
                <i className="fas fa-heart"></i>
                {post.likesLength}
              </div>
              <div className="item-comments">
                <i className="fas fa-comment"></i>
                {post.commentsLength}
              </div>
              {/* {renderDelete()} */}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}


// function Post ({post}) {
// }

export default PostProfile;