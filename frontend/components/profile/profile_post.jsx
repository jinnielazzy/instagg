import React from 'react';

function ProfilePost ({post}) {
  return (
    <div className="post-img">
      <img src={post.img_url} />
    </div>
  )
}

export default ProfilePost;