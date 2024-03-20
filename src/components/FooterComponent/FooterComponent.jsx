import { Link } from 'react-router-dom';
import './footer.css';

function FooterComponent () {
  return (
    <footer id="footer">
    <div className="footer-content">
      <div className="footer-left">
          <div id="footer-logo">
              <Link to="index.html">
                  <img src="/src/assets/images/wallpaper/logo.avif" alt="Fashion Store Logo" id="footer-logo-img" />
              </Link>
          </div> 
          <div className="footer-social-links">
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
                      <img src="/src/assets/images/icons/linkedin-in-white.svg" alt="Linkedin icon" />
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
      </div>
      
      <div className="footer-middle">
          <nav className="footer-item footer-nav">
              <div>
                  <Link to="index.html" target="_parent">
                      HOME
                  </Link>
              </div>
              <div>
                  <Link to="products.html" target="_parent">
                      SHOP
                  </Link>
              </div>
              <div>
                  <Link to="contact.html" target="_parent">
                      CONTACT
                  </Link>
              </div>
              <div>
                  <Link to="about.html" target="_parent">
                      ABOUT
                  </Link>
              </div>
              <div>
                  <Link to="blog.html" target="_parent">
                      NEWSROOM
                  </Link>
              </div>
          </nav>
          <div className="footer-item contact">
              <address className="bold">FASHION STORE d.o.o.</address>
              <address>+385(0)22/ 123-4567</address>
              <address>fashion.store@info.org</address>
              <address>123 Street, City, Country</address>
              <address>OIB: 01010101010</address>
          </div>
      </div>
      <div className="footer-right">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.723030569869!2d15.905297276188769!3d43.716304671099266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352596fefd40c5%3A0xdf9d5af364c27a35!2sCentar%20za%20nove%20tehnologije%20i%20poduzetni%C5%A1tvo%20Trokut!5e0!3m2!1shr!2shr!4v1704893982887!5m2!1shr!2shr" frameBorder="0" allowFullScreen className="map-iframe">
          </iframe>
      </div>
    </div>
    <div className="footer-row">
      <div className="legal-links">
          <Link to="legal/privacy.html" target="_parent">Privacy Policy</Link>
          <Link to="legal/cookies.html" target="_parent">Cookies Policy</Link>
          <Link to="legal/termsAndConditions.html" target="_parent">Terms & Conditions</Link>
          <Link to="legal/shippingPolicy.html" target="_parent">Shipping Policy</Link>
          <Link to="legal/returnPolicy.html" target="_parent">Return Policy</Link>
      </div>
      
      <div className="signature">
          <img src="/src/assets/images/icons/copyright-regular-white.svg" alt="Copywright icon" />
              2024 FASHION STORE; by Martin Bolanča
      </div>
    </div>

    </footer>
  )
}
export { FooterComponent }