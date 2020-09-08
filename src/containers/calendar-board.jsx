import React from 'react';
import { connect } from 'react-redux';
import DayViewer from '../components/day-viewer';
import '../style/calendar.scss';
import { bindActionCreators } from 'redux';
import fetchSchedule from '../fetch/fetchSchedule';
import { fetchCurrentWeek, getWeekStartDate, getWeekEndDate, getCurrentWeek } from '../redux/modules/calendar';
import { getAvailableTimes, getBookedTimes } from '../redux/modules/teacher-schedule';

const propTypes = {
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const { fetchTeacherSchedule, fetchCurrentWeek } = this.props;
    fetchTeacherSchedule();
    fetchCurrentWeek();
  }

  UNSAFE_componentWillMount() {
  }

  render() {
    const { availableTimes, bookedTimes, weekStartDate, weekEndDate, week } = this.props;
    console.log(availableTimes);

    return (
      <div className="calendar">
        {week.map((day) =>
          <DayViewer
            key={day.key}
            dayOfWeek={day.dayOfWeek}
            date={day.date}
            availableTimes={availableTimes.filter(time => time.start.key === day.key)}
            bookedTimes={bookedTimes.filter(time => time.start.key === day.key)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    week: getCurrentWeek(state),
    weekStartDate: getWeekStartDate(state),
    weekEndDate: getWeekEndDate(state),
    availableTimes: getAvailableTimes(state),
    bookedTimes: getBookedTimes(state),
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTeacherSchedule: fetchSchedule,
  fetchCurrentWeek,
}, dispatch);

Calendar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
