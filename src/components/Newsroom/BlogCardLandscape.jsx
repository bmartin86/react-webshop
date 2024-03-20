import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogCardLandscape.css';

function BlogCardLandscape ({blog}) {
  return (
    <div className="article">
      <Link key={blog.id} to={"/blog-detail/"+  blog.id}>
        <div className="blog-card">
          <div className="left-blog-card-div">
            <img src={blog.img} alt={blog.alt} className="blog-img" />
          </div>
          <div className="right-blog-card-div">
            <h3>{blog.title}</h3>
            <p>{blog.preview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export { BlogCardLandscape }