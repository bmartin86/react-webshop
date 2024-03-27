import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './footer.css';
import { NavLinks } from '../NavLinks/NavLinks';
import { SocialLinks } from '../SocialLinks/SocialLinks';

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
            <SocialLinks />
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
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookies Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/return-policy">Return Policy</Link>
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