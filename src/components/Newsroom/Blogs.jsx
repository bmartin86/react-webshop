import { BlogCardLandscape } from "./BlogCardLandscape";
import { Link, Outlet } from "react-router-dom";
import { blogList } from "../../assets/blogList";
import './styles/Blog.css';
import { AsideBlogComponent } from "./AsideBlogComponent";

function Blogs () {
  return (
    <main>
    <div className="blog-banner-wrapper">
      <div className="blog-banner">
        <div className="blog-banner-text">
          <h3>Get the latest Press Releases <br /> in the Newsroom to stay <br /> up to date...</h3>
        </div>
      </div>
    </div>
    <div className="blog-main-flexbox">
      <div className="blog-left-div">
        <h2>Latest news</h2>
        {blogList?.slice(-10).map(blog => {
           console.log("Each blog in the list =>", blog)
        return(
          <article className="blog-article-wrapper" key={blog.id}>
            <BlogCardLandscape blog={blog} />
          </article>
          )}
        )
        }

        <div id="paginate">
          <div><a href="#paginate">1</a></div>
          <div><a href="#paginate">2</a></div>
          <div><a href="#paginate">3</a></div>
          <div><a href="#paginate">4</a></div>
          <div><a href="#paginate">5</a></div>
          <div><a href="#paginate">6</a></div>
          <div><a href="#paginate">7</a></div>
        </div>
      </div>
      
      {/* <!-- desni aside --> */}
      <div className="blog-right-div">
        <h2>Press Contact</h2>
        <article id="press-contact-container">
          <div className="profile-card">
            <div className="profile-photo-box">
              <img src="/src/assets/images/wallpaper/profile-1.avif" alt="Profile photo" className="profile-img" />
            </div>
            <div className="profile-info">
              <div className="profile-name">Jane Doe</div>
              <div className="profile-title">
                Head of Corporate Communications
              </div>
              <div className="profile-contact">
                <a href="mailto:fashion.store@info.org" target="_blank">WRITE A MAIL</a>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-photo-box">
              <img src="/src/assets/images/wallpaper/profile-2.avif" alt="Profile photo" className="profile-img" />
            </div>
            <div className="profile-info">
              <div className="profile-name">Jane Doe</div>
              <div className="profile-title">
                Head of Consumer Communications
              </div>
              <div className="profile-contact">
                <a href="mailto:fashion.store@info.org" target="_blank">WRITE A MAIL</a>
              </div>
            </div>
          </div>
        </article>
        
      </div>
    </div>
    <AsideBlogComponent />
    
    <Outlet />
    </main>
  )
}
export { Blogs }