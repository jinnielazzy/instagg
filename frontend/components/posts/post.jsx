import React from 'react';
import { Link } from 'react-router-dom';

function Post ({post}) {
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
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post;