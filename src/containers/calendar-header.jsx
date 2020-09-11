import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import Hint from '../components/hint';
import { bindActionCreators } from 'redux';
import { goNextWeek, goLastWeek, getWeek, getToday } from '../redux/modules/calendar';

import '../style/pages/calendarHeader.scss';
import { classNames } from '../utils/classNames';

const propTypes = {
};

class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getCurrentWeekRange(week) {
    if (!!week.length) {
      const firstDayOfWeek = week[0];
      return `${firstDayOfWeek.fullDate.year}/${firstDayOfWeek.fullDate.stringMonth}/${firstDayOfWeek.fullDate.stringDate} - ${week[week.length - 1].fullDate.stringDate}`
    }
    return 'Oops, that seems occur an error.'
  }

  renderLastWeekClass() {
    const { week, today } = this.props;

    if (!week.length) {
      return;
    }
    return classNames({ lastButton_disabled: week[0].fullDate.key < today.key })
  }

  render() {
    const { goLastWeek, goNextWeek, week } = this.props;
    return (
      <div className="calendarHeader">
        <Pagination
          className="pagination"
          lastWeekButtonClass={this.renderLastWeekClass()}
          goLast={() => goLastWeek()}
          goNext={() => goNextWeek()}
          weekRange={this.getCurrentWeekRange(week)}
        />
        <Hint className="hint" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    today: getToday(state),
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
