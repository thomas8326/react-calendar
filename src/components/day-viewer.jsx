import React from 'react';
import '../style/calendar.scss';

const HALF_OF_HOUR = 30;
const ONE_HOUR = 60;
const MILITARY_TIME = 24;

const propTypes = {
};

class DayViewer extends React.Component {
  constructor(props) {
    super(props);

    const { availableTimes, bookedTimes } = this.props;
    const todayAvailableTimes = availableTimes.flatMap(availableTime => this.getTime(availableTime, 'dayContainer-time_available'));
    const todayBookedTimes = bookedTimes.flatMap(bookedTimes => this.getTime(bookedTimes, 'dayContainer-time_disable'));

    this.state = {
      dayTimes: todayAvailableTimes.concat(todayBookedTimes).sort((prev, curr) => prev.value - curr.value)
    }
  }

  dayTimeConverter(time) {
    const clock = time.clock < 10 ? '0' + time.clock : time.clock;
    const minute = time.minute < 10 ? '0' + time.minute : time.minute;
    return clock + ':' + minute;
  }

  getTime({ start, end }, className) {
    let current = start;
    const last = end;
    const result = [{ text: this.dayTimeConverter(start), className: className, value: start.clock * 100 + start.minute }];

    while (current.clock < last.clock) {
      const newCurrent = current.minute + HALF_OF_HOUR >= ONE_HOUR ? { clock: current.clock + 1, minute: 0 } : { clock: current.clock, minute: current.minute + HALF_OF_HOUR };

      if (newCurrent.clock !== MILITARY_TIME) {
        result.push({ text: this.dayTimeConverter(newCurrent), className: className, value: newCurrent.clock * 100 + newCurrent.minute });
      }

      current = newCurrent;
    }

    return result;
  }

  render() {
    const { dayOfWeek, date } = this.props;
    const { dayTimes } = this.state;
    return (
      <div className="dayContainer">
        <div className="dateBoard">
          <div className="dayOfWeek textCenter fontSize-l">{dayOfWeek}</div>
          <div className="date textCenter fontSize-l">{date}</div>
        </div>
        <ul className="timeBoard fontSize-s">
          {dayTimes.map((time, index) => (<li key={index} className={time.className + " time"}>{time.text}</li>))}
        </ul>
      </div>
    );
  }
}

DayViewer.propTypes = propTypes;
export default DayViewer;
