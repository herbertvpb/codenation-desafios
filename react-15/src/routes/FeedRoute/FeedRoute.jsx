import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    const baseUrl = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1/';
    const pagination = `?page=${1}&limit=${2}`;

    const usersResponse = await fetch(`${baseUrl}/users${pagination}`);
    const usersData = await usersResponse.json();

    let newPosts = [];

    for (const user of usersData) {
      const postsResponse = await fetch(`${baseUrl}/users/${user.id}/posts`);
      const postsData = await postsResponse.json();

      const usersPosts = postsData.map(post => {        
        return {
          userInfo: user,
          postInfo: post,
        }
      });

      newPosts = newPosts.concat(usersPosts);
    };

    setPosts(newPosts);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  
  return (
    <div data-testid="feed-route">
      { loading ? (
        <Loading />
      ) : (
        <Posts posts={posts} />
      )}
      <button>Ver mais</button>
    </div>
  );
};

export default FeedRoute;
