import './Contact.css';
import { useEffect, useState } from 'react';

function Contact() {
  const images = [
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="contact-overlay">
        <div className="contact-container animate-contact">
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="info-card">
            <h3>Address</h3>
            <p>Corps of Engineers Sailing Club (CESC),<br />F Combat, College of Military Engineering (CME),<br />Dapodi, Pune – 411031, Maharashtra</p>
          </div>
          <div className="info-card">
            <h3>Emails</h3>
            <p>noaiopti@rediffmail.com<br />noairegatta@gmail.com</p>
          </div>
          <div className="info-card">
            <h3>Secretary NOAI</h3>
            <p>Lt Col Nikesh Sherekar<br />Mob: +919822530161</p>
          </div>
          <div className="info-card">
            <h3>Treasurer NOAI</h3>
            <p>Sub Manoj Kumar<br />Mob: +917875063470</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;