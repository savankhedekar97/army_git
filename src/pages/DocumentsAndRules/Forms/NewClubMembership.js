import React, { useEffect, useState } from 'react';
import './NewClubMembership.css';

function NewClubMembership() {
  const images = [
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg',
    '/assets/images/contact_bg1.jpg',
    '/assets/images/contact_bg2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="membership-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="membership-overlay">
        <div className="membership-container animate-membership">
          <h1 className="title">New Club Membership Form</h1>
          <p className="subtitle">
            View or Download the official NOAI New Club Membership Form easily.
          </p>

          <div className="buttons">
            {/* ✅ View the form in a new tab */}
            <a
              href="/assets/documents/new_club_membership_form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view"
            >
              View Membership Form
            </a>

            {/* ✅ Download the form directly */}
            <a
              href="/assets/documents/new_club_membership_form.pdf"
              download
              className="btn-download"
            >
              Download Membership Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewClubMembership;
