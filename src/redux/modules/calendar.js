import { MyDate } from '../../entity/date';

// Constants
export const FETCH_CURRENT_WEEK = 'FETCH_CURRENT_WEEK';
export const FETCH_WEEK = 'FETCH_WEEK';
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK';
export const GO_LAST_WEEK = 'GO_LAST_WEEK';


// export const constants = { };

// Action Creators

export function fetchWeek() {
  const current = new MyDate();
  return {
    type: FETCH_WEEK,
    today: current.getFullDate(),
    week: current.getWeek(),
  }
}

export function goLastWeek() {
  return (dispatch, getState) => {
    const myDate = new MyDate();
    const { week } = getState().calendar;
    const startDateOfWeek = week[0].fullDate;
    const lastWeek = myDate.getWeek(new MyDate(startDateOfWeek.year, startDateOfWeek.month, startDateOfWeek.date - 7));
    return dispatch({
      type: GO_LAST_WEEK,
      week: lastWeek
    })
  };
}

export function goNextWeek() {
  return (dispatch, getState) => {
    const myDate = new MyDate();
    const { week } = getState().calendar;
    const endDateOfWeek = week[week.length - 1].fullDate;
    const nextWeek = myDate.getWeek(new MyDate(endDateOfWeek.year, endDateOfWeek.month, endDateOfWeek.date + 1));
    return dispatch({
      type: GO_NEXT_WEEK,
      week: nextWeek
    })
  };
}

// Reducer
export const defaultState = {
  today: {},
  week: [],
};

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {

    case FETCH_WEEK:
      console.log(action);
      return {
        ...state,
        today: action.today,
        week: action.week,
      }
    case GO_NEXT_WEEK:
    case GO_LAST_WEEK:
      return {
        ...state,
        week: action.week
      }
    default:
      return state;
  }
}
export const getToday = state => state.calendar.today;
export const getWeek = state => state.calendar.week;

