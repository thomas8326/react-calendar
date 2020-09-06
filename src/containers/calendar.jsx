import React from 'react';
import { connect } from 'react-redux';
import DayViewer from '../components/day-viewer';
import '../style/calendar.scss';

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

  render() {
    const { week } = this.state;
    console.log(week);

    return (
      <div className="calendar">
        {week.map((day) => <DayViewer key={day.key} dayOfWeek={day.value} date={day.date} />)}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

Calendar.propTypes = propTypes;
export default connect()(Calendar);
