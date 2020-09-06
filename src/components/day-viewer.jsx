import React from 'react';
import '../style/calendar.scss';

const propTypes = {
};

function DayViewer({ dayOfWeek, date, availableStartTime, availableEntTime }) {
  // generateOneDataAvailableTime(availableStartTime, availableEntTime) {
  // }

  return (
    <div className="dayContainer">
      <div className="dayOfWeek textCenter fontSize-l">{dayOfWeek}</div>
      <div className="date textCenter fontSize-l">{date}</div>
      <ul className="time fontSize-s">
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
