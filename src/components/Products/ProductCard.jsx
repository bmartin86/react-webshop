import './styles/ProductCard.css';

function ProductCard () {
  return (
    <div className="product-card">
      <div className="product-img-box">
        <a href="productDetail.html" target="_parent">
          <img src="/src/assets/images/products/women-trenchcoat.webp" alt="Model wearing product" className="product-image" />
        </a>
        <div className="heart-container">
          <input type="checkbox" />
        </div>
      </div>
      <div className="product-description">
          <a href="productCategories.html">
            <div className="product-name">
            Women Trench Coat
            </div>
          </a>
        <div className="product-price">99.99 &euro;</div>
        <div className="product-category">New Arrival</div>
      </div>
    </div>
  )
}
export { ProductCard }