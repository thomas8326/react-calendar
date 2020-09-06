import React from 'react';
import '../style/pagination.scss';

const propTypes = {
};

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination-buttonGroup">
        <button type="button" className="pureButton fontSize-s">{'<'}</button>
        <button type="button" className="pureButton fontSize-s">{'>'}</button>
      </div>
      <div className="pagination-hint fontSize-l">
        2020-06-13
      </div>
    </div>
  );
}

Pagination.propTypes = propTypes;
export default Pagination;
