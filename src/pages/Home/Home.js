// 
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">National Optimist Association of India</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">News</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
        <input type="text" className="search-bar" placeholder="Search..." />
      </header>

      <section className="hero">
        <div className="slide">
          <img src="https://via.placeholder.com/800x300" alt="Event 1" />
          <div className="slide-text">
            <h2>Extraordinary General Meeting</h2>
            <button>Read More</button>
          </div>
        </div>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <div className="card">
            <img src="https://via.placeholder.com/200" alt="event" />
            <p>2025 African Championship</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/200" alt="event" />
            <p>IODA Events 2025</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/200" alt="event" />
            <p>South American Regatta</p>
          </div>
        </div>
      </section>

      <section className="downloads">
        <h2>Downloads</h2>
        <ul>
          <li>2025 Handbook (Download)</li>
          <li>Class Rules (Download)</li>
          <li>Meeting Notices (Download)</li>
        </ul>
      </section>

      <section className="quick-links">
        <div className="box">Technical Committee</div>
        <div className="box">Regatta Committee</div>
        <div className="box">How to Bid</div>
      </section>

      <footer>
        <p>© 2025 National Optimist Association of India | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
