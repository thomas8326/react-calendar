import React from 'react';

const propTypes = {
};

class WeekViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: [{
        key: 0,
        value: 'Sun',
      }, {
        key: 1,
        value: 'Mon',
      }, {
        key: 2,
        value: 'Tue',
      }, {
        key: 3,
        value: 'Wed',
      }, {
        key: 4,
        value: 'Thu',
      }, {
        key: 5,
        value: 'Fri',
      }, {
        key: 6,
        value: 'Sat',
      }],
    };
  }

  render() {
    const { week } = this.state;

    return (
      <ul>
        {week.map((day) => <li>{day}</li>)}
      </ul>
    );
  }
}

WeekViewer.propTypes = propTypes;
export default WeekViewer;
