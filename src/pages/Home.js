import React from 'react';
import KpiBox from '../components/KpiBox';
import { users } from '../assets/data/users';
import { posts } from '../assets/data/posts';

const Home = () => {
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const usersActiveLast24Hours = users.filter(user => user.activeLast24Hours).length;
  const postsLast24Hours = posts.filter(post => post.createdAt >= Date.now() - 86400000).length;

  return (
    <div className="home-page">
      <KpiBox label="Total Users" value={totalUsers} />
      <KpiBox label="Total Posts" value={totalPosts} />
      <KpiBox label="Users Active in Last 24 Hours" value={usersActiveLast24Hours} />
      <KpiBox label="Posts Published in Last 24 Hours" value={postsLast24Hours} />
    </div>
  );
};

export default Home;
