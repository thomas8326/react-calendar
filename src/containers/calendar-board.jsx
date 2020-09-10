import React from 'react';
import { connect } from 'react-redux';
import DayViewer from '../components/day-viewer';
import '../style/calendar.scss';
import { bindActionCreators } from 'redux';
import fetchSchedule from '../fetch/fetchSchedule';
import { fetchWeek, getWeek, getToday } from '../redux/modules/calendar';
import { getAvailableTimes, getBookedTimes } from '../redux/modules/teacher-schedule';

const propTypes = {
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const { fetchTeacherSchedule, fetchWeek } = this.props;
    fetchTeacherSchedule();
    fetchWeek();
  }

  UNSAFE_componentWillMount() {
  }

  render() {
    const { availableTimes, bookedTimes, week, today } = this.props;
    console.log(week);

    return (
      <div className="calendar">
        {week.map((day) =>
          <DayViewer
            key={day.fullDate.key}
            dayOfWeek={day.dayOfWeek}
            date={day.fullDate.date}
            dateKey={day.fullDate.key}
            todayKey={today.key}
            availableTimes={availableTimes.filter(time => time.start.fullDate.key === day.fullDate.key)}
            bookedTimes={bookedTimes.filter(time => time.start.fullDate.key === day.fullDate.key)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    today: getToday(state),
    week: getWeek(state),
    availableTimes: getAvailableTimes(state),
    bookedTimes: getBookedTimes(state),
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTeacherSchedule: fetchSchedule,
  fetchWeek,
}, dispatch);

Calendar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
