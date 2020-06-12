import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const follower = postInfo.comments[0].name;

  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [likes, setLikes] = useState(postInfo.likes.length || 1);
    
  const likePost = () => {
    const likedValue = !liked;
    setLiked(likedValue);

    const likesLength = postInfo.likes.length || 1;

    const newLikes = likedValue ? likes + 1 : likesLength;
    
    setLikes(newLikes);
  };

  return (
    <article data-testid="post" className="post">
      <div className="post__header">
        <div className="user">
          <div className="user__thumb">
            <img 
              src={userInfo.avatar} 
              alt="Profile"
            />
          </div>
          <span className="user__name">{userInfo.name}</span>
        </div>
        <button 
          className="post__context"
          onClick={() => setFollowed(!followed)}
        >
          <span className={`follow-btn ${followed && 'is-following'}`}>
            {followed ? 'Seguindo' : 'Seguir'}
          </span>
        </button>
      </div>

      <div className="post__figure">
        <img 
          src={postInfo.imageUrl} 
          alt="Figure"
        />
      </div>

      <div className="post__controls">
        <button 
          className="post__control"
          onClick={likePost}
        >
          <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
        </button>
        <div className="post__status">
          <div className="user">
            <span>
              {`curtido por `}
              <a href="/">{follower}</a>
              {` e outra${(likes > 1) ? 's ' : ''} `}
              <a href="/">
                {`${likes} pessoa${(likes > 1) ? 's ' : ''} `}
              </a> 
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
