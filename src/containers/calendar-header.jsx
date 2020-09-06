import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/pagination';
import Hint from '../components/hint';

import '../style/calendarHeader.scss';

const propTypes = {
};

function CalendarHeader() {
  return (
    <div className="calendarHeader">
      <Pagination />
      <Hint />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

CalendarHeader.propTypes = propTypes;
export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(CalendarHeader);
