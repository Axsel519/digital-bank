/** @format */
import "../styles/footerstyle.css";
import logolight from "../assets/images/logo-light.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo-footer">
            <img src={logolight} alt="Digitalbank Logo" />
          </div>

          <div className="social">
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="YouTube" />
            <img src={twitter} alt="Twitter" />
            <img src={pinterest} alt="Pinterest" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div className="links-column">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>

          <div className="links-column">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <button className="footer-btn">Request Invite</button>
          <p>© Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
