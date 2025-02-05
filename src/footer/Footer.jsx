import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
  <div className="container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>
        Welcome to Khandelwal Multispeciality Hospital, where we provide compassionate care with cutting-edge medical facilities to ensure the best health outcomes for our patients.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Our Services</a></li>
        <li><a href="/doctors">Doctors</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/faq">FAQs</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>📍 84, Karani Vihar-B, Road No. 17<br />Vishwakarma Industrial Area<br />Jaipur, Rajasthan 302013</p>
      <p>📞 +91 9314660352</p>
      <p>✉ kips.jaip@gmail.com</p>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Khandelwal Multispeciality Hospital. All rights reserved.</p>
  </div>
</footer>

    )
}

export default Footer;