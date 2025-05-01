import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const taglines = [
  'Service Before Self',
  'Brave Hearts, Fearless Minds'
];

export default function Banner() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false);
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setIdx(i => (i + 1) % taglines.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
      setIdx(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered]);

  return (
    <div className="banner">
      <img
        className="banner-bg"
        src="/assets/hero/hero3.jpg"
      />

      {/* <div
        className="brand-box"
        onClick={()=>{navigate("/")}}
     
      >
        <img
          src="/assets/images/LOGO NOAI.jpg"
          alt="NOAI Logo"
          className="brand-logo"
        />

        <div className="text-wrapper" >
          <h3 className="brand-text">
            National Optimist<br/>
            Association of <span>India</span>
          </h3>

          
         
          
        </div>
      </div> */}
    </div>
  );
}
