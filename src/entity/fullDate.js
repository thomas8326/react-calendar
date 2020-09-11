import PropTypes from 'prop-types';

export const FullDate = {
  key: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  stringMonth: PropTypes.string.isRequired,
  stringDate: PropTypes.string.isRequired,
}
