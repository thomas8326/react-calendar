import React from 'react';
import '../style/components/pagination.scss';
import { classNames } from '../utils/classNames';
import PropTypes from 'prop-types';

const propTypes = {
  goLast: PropTypes.func,
  goNext: PropTypes.func,
  weekRange: PropTypes.string,
  lastWeekButtonClass: PropTypes.string,
};

function Pagination({ goLast, goNext, weekRange, lastWeekButtonClass }) {
  return (
    <div className="pagination">
      <div className="pagination-buttonGroup">
        <button type="button" className={classNames('pureButton', 'fontSize-s', lastWeekButtonClass)} onClick={() => goLast()}>{'<'}</button>
        <button type="button" className="pureButton fontSize-s" onClick={() => goNext()}>{'>'}</button>
      </div>
      <div className="pagination-hint fontSize-l">
        {weekRange}
      </div>
    </div>
  );
}

Pagination.propTypes = propTypes;
export default Pagination;
