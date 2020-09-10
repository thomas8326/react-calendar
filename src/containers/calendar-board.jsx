import React from 'react';
import { connect } from 'react-redux';
import DayViewer from '../components/day-viewer';
import '../style/calendar.scss';
import { bindActionCreators } from 'redux';
import fetchSchedule from '../fetch/fetchSchedule';
import { fetchWeek, getWeek } from '../redux/modules/calendar';
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
    const { week } = this.props;
    return (
      <div className="calendar">
        {week.map((day) =>
          <DayViewer
            key={day.fullDate.key}
            dayOfWeek={day.fullDate.dayOfWeek}
            date={day.fullDate.date}
            availableTimes={[]}
            bookedTimes={[]}
          // availableTimes={availableTimes.filter(time => time.start.key === day.key)}
          // bookedTimes={bookedTimes.filter(time => time.start.key === day.key)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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
