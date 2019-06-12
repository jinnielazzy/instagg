import React from 'react';
import { Link } from 'react-router-dom';

function Post ({post}) {
  return (
    <div className="post-img">
      <Link to={`/users/${post.user_id}`}><img src={post.img_url} /></Link>
    </div>
  )
}

export default Post;