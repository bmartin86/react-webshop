import './styles/ProductCategory.css';
import { Link } from 'react-router-dom';
import { productCategoryList } from '../../assets/productCategoryList.jsx';


function ProductCategory () {
  const categories = productCategoryList;

  return (
    <section className="productCategories-wrapper">
        {categories?.map(category => {
            console.log("Each category in the list =>", category)
          return(
            <div className="productCategories" key={category.id}>
              <div id="categories-wrapper">
              <div id="categories-content">
                <section className="cat-hero-wrapper">
                <div className="cat-hero-image" 
                  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7)), url(${category.src})`}}
                  alt={category.alt} >            
                    <div className="cat-hero-text">
                      <h3>{category.title}</h3>
                      <Link to="/products">
                      <button>SHOP NOW</button>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div> 
            </div>
            )}
          )
        }

    </section>
  );
}
export { ProductCategory }