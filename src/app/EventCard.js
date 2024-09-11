// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, date, location }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-xl font-bold text-green-600 mb-2">{title}</h3>
      <p className="text-gray-700">Date: {date}</p>
      <p className="text-gray-700">Location: {location}</p>
    </div>
  );
};

export default EventCard;
