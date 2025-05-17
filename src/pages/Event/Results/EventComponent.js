import React from "react";
import "./EventComponent.css";

function EventComponent({ className, events, bgImage, onBack }) {
  return (
    <div className="event-wrapper">
      <div
        className="event-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + bgImage})`,
        }}
      />
      <div className="event-content">
        <h2 className="event-title">{className} – Events</h2>
        <button className="back-btn" onClick={onBack}>⬅ Back</button>

        <table className="event-table">
          <thead>
            <tr>
              <th>SN.</th>
              <th>Date</th>
              <th>Event Name</th>
              <th>Class</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{event.name}</td>
                <td>{event.eventName}</td>
                <td>{event.className}</td>
                <td>
                  <a href={event.pdfLink} target="_blank" rel="noreferrer">⬇ Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventComponent;
