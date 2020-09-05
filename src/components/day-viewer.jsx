import React from 'react';

const propTypes = {
};

function DayViewer(dayOfWeek, date, availableStartTime, availableEntTime) {
  // generateOneDataAvailableTime(availableStartTime, availableEntTime) {
  // }

  return (
    <div className="day">
      <div className="dayOfWeek">{dayOfWeek}</div>
      <div className="date">{date}</div>
      <ul className="time">
        <li>00:00</li>
        <li>00:30</li>
        <li>01:00</li>
        <li>02:00</li>
        <li>03:00</li>
      </ul>
    </div>
  );
}

DayViewer.propTypes = propTypes;
export default DayViewer;
