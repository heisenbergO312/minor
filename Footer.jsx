import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer gradient-background">
      <div className="footer-content">
        <div className="footer-info">
          At ClaimQuick, we are dedicated to providing exceptional products/services and a seamless online experience. Our mission is to provide people with . We value your trust and are committed to safeguarding your privacy. For inquiries or support, please don't hesitate to contact us at <b>claimquick@gmail.com or +91-8409429323</b>. Your satisfaction is our priority, and we appreciate your visit to our website.
        </div>
        <div className="footer-footer">
          <div className="footer-icons">
            Follow us on :-
            <TwitterIcon style={{ margin: "0 0.5em 0 0.5em" }} />
            <LinkedInIcon style={{ margin: "0 0.5em 0 0.5em" }} />
            <InstagramIcon style={{ margin: "0 0.5em 0 0.5em" }} />
          </div>
          <div class="footer-space"></div>
          <div className="footer-copyright">
            © 2023 ClaimQuick Insurance. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
