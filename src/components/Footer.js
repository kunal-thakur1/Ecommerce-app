import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 E-commerce App. All rights reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
