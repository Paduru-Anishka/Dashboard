import React, { useState } from 'react';
import KpiBox from '../components/KpiBox';
import { posts } from '../assets/data/posts';

const PostListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const displayedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="post-listing-page">
      <KpiBox label="Total Posts" value={posts.length} />
      <KpiBox label="Posts Published in Last 24 Hours" value={posts.filter(post => post.createdAt >= Date.now() - 86400000).length} />
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.caption}</td>
              <td>{post.mediaUrl}</td>
              <td>
                <button>Delete</button>
                <button>Hide</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostListing;
