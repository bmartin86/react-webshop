import { Link } from 'react-router-dom';
import './header.css';
import '../MainStyles.css';

function HeaderComponent () {
  return (
    <div className="header-wrapper">
      <div id="header">
        <div className="header-top-row">
          <div className="social-links">
            <button className="phone-button">
              <Link to="tel:+385221234567" target="_blank">
                <img src="/src/assets/images/icons/phone-solid-white.svg" alt="Phone icon" />
              </Link>
              <div className="tooltip">Phone</div>
            </button>
            <button className="email-button">
              <Link to="mailto:fashion.store@info.org" target="_blank">
                <img src="/src/assets/images/icons/envelope-solid-white.svg" alt="Email icon" />
              </Link>
              <div className="tooltip">Email</div>
            </button>
            <button className="facebook-button">
              <Link to="https://web.facebook.com/" target="_blank">
                <img src="/src/assets/images/icons/facebook-f-white.svg" alt="Facebook icon" />
              </Link>
              <div className="tooltip">Facebook</div>
            </button>
            <button className="instagram-button">
              <Link to="https://www.instagram.com/" target="_blank">
                <img src="/src/assets/images/icons/instagram-white.svg" alt="Instagram icon" />
              </Link>
              <div className="tooltip">Instagram</div>
            </button>
            <button className="tiktok-button">
              <Link to="https://www.tiktok.com" target="_blank">
                <img src="/src/assets/images/icons/tiktok-white.svg" alt="TikTok icon" />
              </Link>
              <div className="tooltip">TikTok</div>
            </button>  
            <button className="linkedin-button">
              <Link to="https://www.linkedin.com" target="_blank">
                <img src="/src/assets/images/icons/linkedin-in-white.svg" alt="LinkedIn icon" />
              </Link>
              <div className="tooltip">LinkedIn</div>
            </button>
            <button className="twitter-button">
              <Link to="https://www.twitter.com" target="_blank">
                <img src="/src/assets/images/icons/twitter-white.svg" alt="Twitter icon" />
              </Link>
              <div className="tooltip">Twitter</div>
            </button>
          </div>
          <div className="logo-box">
            <div id="logo"><Link to="/"><img src={'/src/assets/images/wallpaper/logo.avif'} alt="Fashion Store Logo" /></Link></div> 
          </div>

          <div className="search-cart">
            <input type="text" placeholder="Search..." />
            <button className="cart-icon-button">
              <Link to="cart.html" target="_parent">
                <img src="/src/assets/images/icons/shopping-bag-24.png" alt="Cart icon" id="cart-icon" />
              </Link>
              <div className="tooltip">Cart</div>
            </button>

          </div>
        </div>
    
      <nav className="header-nav">
        <Link to="/" target="_parent">HOME</Link>
        <Link to="/products" target="_parent">SHOP</Link>
        <Link to="/contact" target="_parent">CONTACT</Link>
        <Link to="/about" target="_parent">ABOUT</Link>
        <Link to="/blogs" target="_parent">NEWSROOM</Link>
      </nav>
      </div>
    </div>
  )
}
export { HeaderComponent }