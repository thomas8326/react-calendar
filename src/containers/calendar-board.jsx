import React from 'react';
import { connect } from 'react-redux';
import DayViewer from '../components/day-viewer';
import '../style/calendar.scss';
import { bindActionCreators } from 'redux';
import fetchCalendar from '../fetch/fetchCalendar';
import { getAvailableTimes, getBookedTimes } from '../redux/modules/calendar';

const propTypes = {
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [{
        key: 0,
        value: 'Sun',
        date: '20',
      }, {
        key: 1,
        value: 'Mon',
        date: '21',
      }, {
        key: 2,
        value: 'Tue',
        date: '22',
      }, {
        key: 3,
        value: 'Wed',
        date: '23',
      }, {
        key: 4,
        value: 'Thu',
        date: '24',
      }, {
        key: 5,
        value: 'Fri',
        date: '25',
      }, {
        key: 6,
        value: 'Sat',
        date: '26',
      }],
    };
  }

  UNSAFE_componentWillMount() {
    const { fetchCalendar } = this.props;
    fetchCalendar();
  }

  render() {
    const { week } = this.state;
    const { availableTimes, bookedTimes } = this.props;
    console.log(availableTimes);
    console.log(bookedTimes);

    return (
      <div className="calendar">
        {week.map((day) => <DayViewer key={day.key} dayOfWeek={day.value} date={day.date} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    availableTimes: getAvailableTimes(state),
    bookedTimes: getBookedTimes(state),
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCalendar,
}, dispatch);

Calendar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
