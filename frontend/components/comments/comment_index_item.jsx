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
                  <div>
                    {comment.username}
                  </div>
                  <div>
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