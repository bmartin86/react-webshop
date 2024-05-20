import { BlogCardPortrait } from "./BlogCardPortrait";
import { blogList } from "../../assets/blogList";
import "./styles/AsideBlogComponent.css";

function AsideBlogComponent() {
  return (
    <div className="aside-blog-wrapper">
      <h2 className="aside-blog-title">Latest news</h2>
      <div className="blog-flexbox">
        {blogList?.slice(-3).map((blog) => {
          return (
            <article key={blog.id}>
              <BlogCardPortrait blog={blog} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
export { AsideBlogComponent };
