import { useParams } from "react-router-dom";
import { blogList } from "../../assets/blogList";
import './styles/BlogDetail.css';
import { useState } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";

function BlogDetail () {
  const URLParams = useParams();
  console.log(URLParams);
  console.log("Blog list: ", blogList);

  const currentBlogId = URLParams.id;
  const currentBlog = blogList.filter(item => {
    return item.id.toString() === currentBlogId.toString();
  })
  console.log("Current blog => ", currentBlog);

  const [blogPost, setBlogPost] = useState(currentBlog[0]);
  console.log("Blog post: ", blogPost);
  return (
    <main>    
    <div className="blog-detail-wrapper">
    <div className="single-blog-main-flexbox">
      <div className="blog-main-left"></div>

      <article id="main-blog-content">
        <h1>{blogPost.title}</h1>
        <div className="blog-header">
          <p id="blog-header-intro">
            {blogPost.contentIntro}
          </p>
          <time id="timestamp">{blogPost.timestamp}</time>
        </div>

        <div className="img-div">
          <img src={blogPost.img} alt={blogPost.alt} className="blog-detail-img" />
        </div>
        <div className="article-main-text">
          <div>
            {blogPost.contentMainTop}
          </div>
          <div>
            {blogPost.contentMain}
          </div>

          {/* <!-- klasa za border --> */}
          <div id="border-bottom-div">
            {blogPost.contentMainBottom}
          </div>

          <div id="padding-top-div">
            {blogPost.contentOutro}
          </div>
          <div className="blog-text-author">
            {blogPost.author}
          </div>
        </div>
      </article>

      <div className="blog-main-right">
        <div className="social-links-wrapper">
          <div>SHARE</div>
          
          <div className="social-links-flexbox">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>
  )
}
export { BlogDetail }