import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.string,
  timezone: PropTypes.string,
};

// TODO: Timezone and area
function Hint() {
  return (
    <div className="hint fontSize-s">
      <div className="hintText">
        * All the timings listed are in your timezone:
      </div>
      <div className="timezone">
        Taipei (GMT+08:00)
      </div>
    </div>
  );
}

Hint.propTypes = propTypes;
export default Hint;
