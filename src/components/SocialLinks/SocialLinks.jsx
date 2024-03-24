import './socialLinks.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
function SocialLinks () {
  return (
    <>
        <button className="facebook-button">
          <Link to="https://web.facebook.com/" target="_blank">
            <Icon icon="eva:facebook-fill" width="1.3rem" height="1.3rem" alt="Facebook icon" />
          </Link>
          <div className="tooltip">Facebook</div>
        </button>
        <button className="instagram-button">
          <Link to="https://www.instagram.com/" target="_blank">
            <Icon icon="fe:instagram" width="1.3rem" height="1.3rem" alt="Instagram icon" />
          </Link>
          <div className="tooltip">Instagram</div>
        </button>
        <button className="tiktok-button">
          <Link to="https://www.tiktok.com" target="_blank">
            <Icon icon="ic:sharp-tiktok" width="1.3rem" height="1.3rem" alt="TikTok icon" />
          </Link>
          <div className="tooltip">TikTok</div>
        </button>  
        <button className="linkedin-button">
          <Link to="https://www.linkedin.com" target="_blank">
            <Icon icon="ri:linkedin-fill" width="1.3rem" height="1.3rem" alt="LinkedIn icon" />
          </Link>
          <div className="tooltip">LinkedIn</div>
        </button>
        <button className="twitter-button">
          <Link to="https://www.twitter.com" target="_blank">
            <Icon icon="mdi:twitter" width="1.3rem" height="1.3rem" alt="Twitter icon" />
          </Link>
          <div className="tooltip">Twitter</div>
        </button>
    </>
  )
}
export { SocialLinks }