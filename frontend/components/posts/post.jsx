import React from 'react';

function Post ({post}) {
  return (
    <div className="post-img">
      <img src={post.img_url} />
    </div>
  )
}

export default Post;