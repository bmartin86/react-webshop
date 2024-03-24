import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './footer.css';
import { NavLinks } from '../Nav/NavLinks';

function FooterComponent () {
  return (
    <footer id="footer">
    <div className="footer-content">
      <div className="footer-left">
          <div id="footer-logo">
              <Link to="index.html">
                  <img src={'https://res.cloudinary.com/dx6qjxz55/image/upload/v1711201666/logo_nbgkq0.avif'} alt="Fashion Store Logo" id="footer-logo-img" />
              </Link>
          </div> 
          <div className="footer-social-links">
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
      </div>
      
      <div className="footer-middle">
          <nav className="footer-item footer-nav">
            <NavLinks />
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
      <Icon icon="ph:copyright" width="1rem" height="1rem" alt="Copywright icon" />
              2024 FASHION STORE; by Martin Bolanča
      </div>
    </div>

    </footer>
  )
}
export { FooterComponent }