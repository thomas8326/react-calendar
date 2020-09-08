import { MyDate } from '../../utils/date';

// Constants
export const FETCH_CURRENT_WEEK = 'FETCH_CURRENT_WEEK';
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK';
export const GO_LAST_WEEK = 'GO_LAST_WEEK';
export const WEEK_FORMAT_MAP = new Map([
  [0, 'Sun'],
  [1, 'Mon'],
  [2, 'Tue'],
  [3, 'Wed'],
  [4, 'Thu'],
  [5, 'Fri'],
  [6, 'Sat'],
]);

// export const constants = { };

// Action Creators

export function fetchCurrentWeek() {
  const getCurrentWeek = () => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;
    const week = new Array(lastDayOfWeek - firstDayOfWeek + 1).fill().map((_, index) => {
      const myDate = new MyDate(new Date(today.setDate(firstDayOfWeek + index)));

      return {
        key: myDate.getKey(),
        year: myDate.getYear(),
        month: myDate.getMonth(),
        date: myDate.getDate(),
        dayOfWeek: WEEK_FORMAT_MAP.get(index),
      }
    });

    return {
      weekStartDate: new Date(today.setDate(firstDayOfWeek)).getTime(),
      weekEndDate: new Date(today.setDate(lastDayOfWeek)).getTime(),
      week: week
    };
  }

  return {
    type: FETCH_CURRENT_WEEK,
    weekStartDate: getCurrentWeek().weekStartDate,
    weekEndDate: getCurrentWeek().weekEndDate,
    week: getCurrentWeek().week
  };
}

// Reducer
export const defaultState = {
  weekStartDate: Date,
  weekEndDate: Date,
  week: []
};

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEEK:
      return {
        ...state,
        weekStartDate: action.weekStartDate,
        weekEndDate: action.weekEndDate,
        week: action.week,
      }
    default:
      return state;
  }
}

export const getWeekStartDate = state => state.calendar.weekStartDate;
export const getWeekEndDate = state => state.calendar.weekEndDate;
export const getCurrentWeek = state => state.calendar.week;
