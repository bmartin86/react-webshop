import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogCardPortrait.css';

function BlogCardPortrait ({blog}) {
  console.log("Blog card blog : ", blog);

    return (
      <div className="blog-card-div">
          <div className="blog-img-div">
            <img src={blog.img} alt={blog.alt} className="blog-img" />
          </div>
          <h4 className="blog-card-title">{blog.title}</h4>
          <p className="blog-preview">
            {blog.preview}
          </p>
          <div className="blog-a-div">
            <Link key={blog.id} to={"/blog-detail/"+  blog.id}>READ MORE</Link>
          </div>
      </div>
    )

}

export { BlogCardPortrait }
