import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div data-testid="posts" className="container">
      { posts.map(post => (
        <Post 
          postInfo={post.postInfo}
          userInfo={post.userInfo}
        />
      )) }
    </div>
  );
}

export default Posts;
