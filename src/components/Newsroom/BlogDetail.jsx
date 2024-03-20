import { Outlet, useParams } from "react-router-dom";
import { blogList } from "../../assets/blogList";
import './styles/BlogDetail.css';
import { useState } from "react";

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

          {/* <!-- važno staviti ovu klasu na pred-predzadnji div radi izgleda stranice/bordera --> */}
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
            <button className="facebook-button">
              <a href="https://web.facebook.com/" target="_blank">
                <img src="/src/assets/images/icons/facebook-f-black.svg" alt="Facebook icon" />
              </a>
              <div className="tooltip">Facebook</div>
            </button>
            <button className="instagram-button">
              <a href="https://www.instagram.com/" target="_blank">
                <img src="/src/assets/images/icons/instagram-black.svg" alt="Instagram icon" />
              </a>
              <div className="tooltip">Instagram</div>
            </button>
            <button className="tiktok-button">
              <a href="https://www.tiktok.com" target="_blank">
                <img src="/src/assets/images/icons/tiktok-black.svg" alt="Tiktok icon" />
              </a>
              <div className="tooltip">Tiktok</div>
            </button>
            <button className="linkedin-button">
              <a href="https://www.linkedin.com" target="_blank">
                <img src="/src/assets/images/icons/linkedin-in-black.svg" alt="Linkedin icon" />
              </a>
              <div className="tooltip">LinkedIn</div>
            </button>
            <button className="twitter-button">
              <a href="https://www.twitter.com" target="_blank">
                <img src="/src/assets/images/icons/twitter-black.svg" alt="Twitter icon" />
              </a>
              <div className="tooltip">Twitter</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>
  )
}
export { BlogDetail }