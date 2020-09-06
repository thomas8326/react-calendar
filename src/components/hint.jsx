import React, { Component, PropTypes } from 'react';

const propTypes = {
};

function Hint() {
  return (
    <div className="hint fontSize-s">
      <span>
        * All the timings listed are in your timezone:
      </span>
      <span>
        Taipei (GMT+08:00)
      </span>
    </div>
  );
}

Hint.propTypes = propTypes;
export default Hint;
