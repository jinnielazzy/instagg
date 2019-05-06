import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    const post = this.props.post;
    return (
      <>
        <li>
          <img src={post.photoUrl} />
          <div className="post-comment">
            <div className="comment">
            </div>
            <form className="comment-form">
              <input type="text" placeholder="Add a comment" />
            </form>
          </div>
        </li>
      </>
    )
  }
}


export default PostIndexItem;