import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePost } from '../context/PostContext';

const PostList = () => {
  const { state, actions } = usePost();
  const { posts, loading, error } = state;

  useEffect(() => {
    actions.fetchPosts();
    actions.fetchCategories();
  }, []);

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h1>Blog Posts</h1>
        <Link to="/posts/new" className="btn btn-primary">
          Create New Post
        </Link>
      </div>
      
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <p className="post-excerpt">
                {post.excerpt || post.content.substring(0, 150)}...
              </p>
              <div className="post-meta">
                <span className="category">{post.category?.name}</span>
                <span className="date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="post-actions">
                <Link to={`/posts/${post._id}`} className="btn btn-secondary">
                  Read More
                </Link>
                <Link to={`/posts/edit/${post._id}`} className="btn btn-outline">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;