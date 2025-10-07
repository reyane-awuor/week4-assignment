import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePost } from '../context/PostContext';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actions } = usePost();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) throw new Error('Post not found');
        const postData = await response.json();
        setPost(postData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await actions.deletePost(id);
        navigate('/');
      } catch (err) {
        setError('Failed to delete post');
      }
    }
  };

  if (loading) return <div className="loading">Loading post...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!post) return <div className="error">Post not found</div>;

  return (
    <div className="post-detail">
      <article className="post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="category">{post.category?.name}</span>
            <span className="date">
              Published on {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </header>
        
        {post.excerpt && (
          <div className="post-excerpt">
            <p>{post.excerpt}</p>
          </div>
        )}
        
        <div className="post-content">
          <p>{post.content}</p>
        </div>

        <div className="post-actions">
          <Link to={`/posts/edit/${post._id}`} className="btn btn-primary">
            Edit Post
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Post
          </button>
          <Link to="/" className="btn btn-secondary">
            Back to Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;