import React from 'react';
import { Link } from 'react-router-dom';

function Post ({post}) {
  return (
    <div className="post-img">
      <Link to={`/users/${post.user_id}`}>
        <img src={post.img_url} />
        <div className="item-info">
          <ul>
            <li className="item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i>
              56
            </li>
            <li className="item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i>
              34
            </li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default Post;