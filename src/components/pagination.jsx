import React from 'react';
import '../style/pagination.scss';
import { classNames } from '../utils/classNames';

const propTypes = {
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
