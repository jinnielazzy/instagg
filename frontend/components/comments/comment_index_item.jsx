import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <div className="comment-body-container">
        {
          this.props.comments.map(
            (comment) => {
              return (
                <div className="comment">
                  <div className="comment-username">
                    {comment.username}
                  </div>
                  <div className="comment-body">
                    {comment.body}
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    )
  }
}

export default CommentIndexItem;