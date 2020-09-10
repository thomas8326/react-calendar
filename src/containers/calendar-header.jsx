import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import Hint from '../components/hint';
import { bindActionCreators } from 'redux';
import { goNextWeek, goLastWeek, getWeek } from '../redux/modules/calendar';

import '../style/calendarHeader.scss';

const propTypes = {
};

class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getCurrentWeekRange(week) {
    if (!!week.length) {
      return `${week[0].fullDate.key} - ${week[week.length - 1].fullDate.date}`
    }
    return 'Oops, that seems occur an error.'
  }

  render() {
    const { goLastWeek, goNextWeek, week } = this.props;
    return (
      <div className="calendarHeader">
        <Pagination className="pagination" goLast={() => goLastWeek()} goNext={() => goNextWeek()} weekRange={this.getCurrentWeekRange(week)} />
        <Hint className="hint" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    week: getWeek(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  goNextWeek,
  goLastWeek,
}, dispatch, ownProps);

CalendarHeader.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarHeader);
