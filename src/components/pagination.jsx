import React from 'react';
import './pagination.scss';

const propTypes = {
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="pagination">
        <button type="button">{'<'}</button>
        <button type="button">{'>'}</button>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
export default Pagination;
