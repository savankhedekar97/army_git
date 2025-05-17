import React, { useState } from "react";
import "./Results.css";
import EventComponent from "./EventComponent";

const resultClasses = [
  {
    name: "OPTIMIST",
    logo: "optimist.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/optimist.jpg",
    events: [
      // { name: "May 08,2025",eventName: "Opti Green A", className: "OPTIMIST", pdfLink: "/assets/resultClassImage/resultpdf/Opti Green A.pdf" },
      // { name: "May 08,2025",eventName: "Opti Green B Fleet", className: "OPTIMIST", pdfLink: "/assets/resultClassImage/resultpdf/Opti Green B Fleet.pdf" },
      // { name: "May 08,2025",eventName: "Opti Main", className: "OPTIMIST", pdfLink: "/assets/resultClassImage/resultpdf/Opti Main.pdf" },

      { name: "Final Result",eventName: "Opti Green", className: "OPTIMIST", pdfLink: "/assets/resultClassImage/resultpdf/Opti Main10-05-25.pdf" },
      { name: "Final Result",eventName: "Opti Main", className: "OPTIMIST", pdfLink: "/assets/resultClassImage/resultpdf/Opti Green10-05-25.pdf" },



    ],
  },
  {
    name: "ILCA 4",
    logo: "ILCAlogo.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/ILCA4.jpg",
    events: [
      // { name: "May 08,2025",eventName: "ILCA 4 (Boys)", className: "ILCA 4", pdfLink: "/assets/resultClassImage/resultpdf/ILCA 4 (Boys).pdf" },
      // { name: "May 08,2025",eventName: "ILCA 4 (Girls)", className: "ILCA 4", pdfLink: "/assets/resultClassImage/resultpdf/ILCA 4 (Girls)-1.pdf" },
    
    { name: "Final Result",eventName: "ILCA 4 (Boys)", className: "ILCA 4", pdfLink: "/assets/resultClassImage/resultpdf/ILCA 4 Boys10-05-25.pdf" },
    { name: "Final Result",eventName: "ILCA 4 (Girls)", className: "ILCA 4", pdfLink: "/assets/resultClassImage/resultpdf/ILCA 4 GIRLS10-05-25.pdf" },
    
    
    ],
  },
  {
    name: "29ER",
    logo: "29erlogo.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/29er.jpg",
    events: [
      // { name: "May 08,2025",eventName: "29er Boys", className: "29ER", pdfLink: "/assets/resultClassImage/resultpdf/29er Boys.pdf" },
      // { name: "May 08,2025",eventName: "29er Girls", className: "29ER", pdfLink: "/assets/resultClassImage/resultpdf/29er Girls.pdf" },


      { name: "Final Result",eventName: "29er Boys", className: "29ER", pdfLink: "/assets/resultClassImage/resultpdf/29er Boys10-05-25.pdf" },
      { name: "Final Result",eventName: "29er Girls", className: "29ER", pdfLink: "/assets/resultClassImage/resultpdf/29er Girls10-05-25.pdf" },


    ],
  },
  {
    name: "Techno 293",
    logo: "Techno293logo.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/Tecno293.jpg",
    events: [
      // { name: "May 08,2025",eventName: "Techno U-15 (Boys)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-15 (Boys).pdf" },
      // { name: "May 08,2025",eventName: "Techno U-15 (Girls)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-15 Girls.pdf" },
      // { name: "May 08,2025",eventName: "Techno U-17 (Girls)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-17 (Girls).pdf" },
      // { name: "May 08,2025",eventName: "Techno U-17 (Boys)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Tecno U-17 (Boys).pdf" },



      { name: "Final Result",eventName: "Techno U-15 (Boys)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno 293 U-15 Boys10-05-25.pdf" },
      { name: "Final Result",eventName: "Techno U-15 (Girls)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-15 (Girls)10-05-25.pdf" },
      { name: "Final Result",eventName: "Techno U-17 (Girls)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-17 (Girls)10-05-25.pdf" },
      { name: "Final Result",eventName: "Techno U-17 (Boys)", className: "Techno 293", pdfLink: "/assets/resultClassImage/resultpdf/Techno U-17 (Boys)10-05-25.pdf" },
    ],
  },
  {
    name: "IQ Foils",
    logo: "IQFoils.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/IQFoils.jpg",
    events: [
     
      // { name: "May 08,2025",eventName: "IQFoil Boys", className: "IQ Foils", pdfLink: "/assets/resultClassImage/resultpdf/IQFoil Boys.pdf" },
      // { name: "May 08,2025",eventName: "IQFoil Girls", className: "IQ Foils", pdfLink: "/assets/resultClassImage/resultpdf/IQ Foil Girls.pdf" },


      { name: "Final Result",eventName: "IQFoil Boys", className: "IQ Foils", pdfLink: "/assets/resultClassImage/resultpdf/IQ Foils Boys10-05-25.pdf" },
      { name: "Final Result",eventName: "IQFoil Girls", className: "IQ Foils", pdfLink: "/assets/resultClassImage/resultpdf/IQ Foil Girls10-05-25.pdf" },
    ],
  },
  {
    name: "INTERNATIONAL 420 (MIXED)",
    logo: "420logo.jpg",
    bgImage: "/assets/resultClassImage/classBgImage/420.jpg",
    events: [
      
      // { name: "May 08,2025",eventName: "420 Mixed", className: "INTERNATIONAL 420", pdfLink: "/assets/resultClassImage/resultpdf/420 Mixed.pdf" },


      { name: "Final Result",eventName: "420 Mixed", className: "INTERNATIONAL 420", pdfLink: "/assets/resultClassImage/resultpdf/420 Mixed10-05-25.pdf" },
    
    ],
  }
];

function Results() {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleViewEvents = (cls) => {
    setSelectedClass(cls);
  };

  const handleBack = () => {
    setSelectedClass(null);
  };

  return (
    <div className="results-wrapper">
      {selectedClass ? (
        <EventComponent
          className={selectedClass.name}
          events={selectedClass.events}
          bgImage={selectedClass.bgImage}
          onBack={handleBack}
        />
      ) : (
        <>
          <div
            className="results-bg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/gallery/IMG_0031.jpg"})`,
            }}
          />

          <div className="results-header">
            <img
              src={`${process.env.PUBLIC_URL}/assets/youthlogo.jpg`}
              alt="YAI Logo"
              className="side-logo"
            />
            <div className="results-title-box">
              <h2 className="results-title">YAI YOUTH NATIONALS – 2025</h2>
              <p className="event-location">📍 Marve Beach, Mumbai</p>
            </div>
            <img
              src="/assets/flaglogo.jpg"
              alt="Flag Logo"
              className="side-logo"
            />
          </div>

          <div className="results-grid">
            {resultClasses.map((cls, index) => (
              <div className="result-card fade-in" key={index}>
                <div className="result-logo">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/resultClassImage/logo/${cls.logo}`}
                    alt={`${cls.name} logo`}
                  />
                </div>
                <h3>{cls.name}</h3>
                <div className="result-actions">
                  <button className="view-btn" onClick={() => handleViewEvents(cls)}>🔍 View</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
