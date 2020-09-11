import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const propTypes = {
  location: PropTypes.string,
  timezone: PropTypes.string,
};

// TODO: Timezone and area
function Hint() {
  return (
    <div className="hint fontSize-s">
      <div className="hintText">
        *<FormattedMessage id='timeZoneHint' />:
      </div>
      <div className="timezone">
        <FormattedMessage id='taipei' /> (GMT+08:00)
      </div>
    </div>
  );
}

Hint.propTypes = propTypes;
export default Hint;
