import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
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
                <Icon icon="ri:phone-fill" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="Phone icon" />
              </Link>
              <div className="tooltip">Phone</div>
            </button>
            <button className="email-button">
              <Link to="mailto:fashion.store@info.org" target="_blank">
                <Icon icon="clarity:email-solid" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="Email icon" />
              </Link>
              <div className="tooltip">Email</div>
            </button>
            <button className="facebook-button">
              <Link to="https://web.facebook.com/" target="_blank">
                <Icon icon="eva:facebook-fill" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="Facebook icon" />
              </Link>
              <div className="tooltip">Facebook</div>
            </button>
            <button className="instagram-button">
              <Link to="https://www.instagram.com/" target="_blank">
                <Icon icon="fe:instagram" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="Instagram icon" />
              </Link>
              <div className="tooltip">Instagram</div>
            </button>
            <button className="tiktok-button">
              <Link to="https://www.tiktok.com" target="_blank">
                <Icon icon="ic:sharp-tiktok" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="TikTok icon" />
              </Link>
              <div className="tooltip">TikTok</div>
            </button>  
            <button className="linkedin-button">
              <Link to="https://www.linkedin.com" target="_blank">
                <Icon icon="ri:linkedin-fill" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="LinkedIn icon" />
              </Link>
              <div className="tooltip">LinkedIn</div>
            </button>
            <button className="twitter-button">
              <Link to="https://www.twitter.com" target="_blank">
                <Icon icon="mdi:twitter" width="1.3rem" height="1.3rem"  style={{color: "white"}} alt="Twitter icon" />
              </Link>
              <div className="tooltip">Twitter</div>
            </button>
          </div>
          <div className="logo-box">
            <div id="logo"><Link to="/"><img src={'https://res.cloudinary.com/dx6qjxz55/image/upload/v1711201666/logo_nbgkq0.avif'} alt="Fashion Store Logo" /></Link></div> 
          </div>

          <div className="search-cart">
            <input type="text" placeholder="Search..." />
            <button className="cart-icon-button">
              <Link to="cart.html" target="_parent">
                <Icon icon="bxs:cart" width="1.6rem" height="1.6rem"  style={{color: "white"}} alt="Cart icon" id="cart-icon" />
              </Link>
              <div className="tooltip">Cart</div>
            </button>

          </div>
        </div>
    
      <nav className="header-nav">
        <Link to="/">HOME</Link>
        <Link to="/products">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/blogs">NEWSROOM</Link>
      </nav>
      </div>
    </div>
  )
}
export { HeaderComponent }