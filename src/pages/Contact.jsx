import React from 'react';
import Layout from '../components/layouts/Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="contact-section">
        <div className="background-image1">
          {/* Your background image goes here */}
          <div class="image-info1">
                 <h4>Contact Us</h4>
                 <p>We are always there to hear from you.</p>
          </div>
        </div>
        </section>
        <div className="center-container">
          <div className="form-control-contact">
            <h3 style={{ padding: "1em"}}>Get in Touch with Us</h3>
            <br />
            <p style={{ padding: "1em",marginTop: "1em"  }}>
              We are always there to hear from you! Send us your valuable suggestions and comments so we can serve you better. There are multiple ways like E-mail, Phone, etc. Choose as per your comfort.
            </p>
          </div>
        </div>
      
    </Layout>
  );
}

export default Contact;
