import { MyDate } from '../../utils/date';
import store from '../../reducers/index';

// Constants
export const FETCH_CURRENT_WEEK = 'FETCH_CURRENT_WEEK';
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK';
export const GO_LAST_WEEK = 'GO_LAST_WEEK';


// export const constants = { };

// Action Creators


export function fetchCurrentWeek() {
  const currentWeek = new MyDate().getCurrentWeek();
  console.log(currentWeek);
  return {
    type: FETCH_CURRENT_WEEK,
    weekStartDate: currentWeek.weekStartDate,
    weekEndDate: currentWeek.weekEndDate,
    lastYear: currentWeek.lastYear,
    lastMonth: currentWeek.lastMonth,
    nextMonth: currentWeek.nextMonth,
    nextYear: currentWeek.nextYear,
    week: currentWeek.week
  };
}

export function goLastWeek() {
  return (dispatch, getState) => {
    const myDate = new MyDate();
    const { weekStartDate, lastMonth, lastYear } = getState().calendar;
    console.log(getState().calendar);
    const lastWeek = myDate.getCurrentWeek(new MyDate(lastYear, lastMonth, weekStartDate - 7));
    return dispatch({
      type: GO_LAST_WEEK,
      weekStartDate: lastWeek.weekStartDate,
      weekEndDate: lastWeek.weekEndDate,
      lastMonth: lastWeek.lastMonth,
      lastYear: lastWeek.lastYear,
      week: lastWeek.week
    })
  };
}

export function goNextWeek() {
  return (dispatch, getState) => {
    const myDate = new MyDate();
    const { weekEndDate, nextMonth, nextYear } = getState().calendar;
    console.log(getState().calendar);

    const nextWeek = myDate.getCurrentWeek(new MyDate(nextYear, nextMonth, weekEndDate + 1));

    return dispatch({
      type: GO_NEXT_WEEK,
      weekStartDate: nextWeek.weekStartDate,
      weekEndDate: nextWeek.weekEndDate,
      nextMonth: nextWeek.nextMonth,
      nextYear: nextWeek.nextYear,
      week: nextWeek.week
    })
  };
}

// Reducer
export const defaultState = {
  weekStartDate: Date,
  weekEndDate: Date,
  lastYear: 0,
  lastMonth: 0,
  nextMonth: 0,
  nextYear: 0,
  week: []
};

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEEK:
      return {
        ...state,
        weekStartDate: action.weekStartDate,
        weekEndDate: action.weekEndDate,
        lastYear: action.lastYear,
        lastMonth: action.lastMonth,
        nextMonth: action.nextMonth,
        nextYear: action.nextYear,
        week: action.week
      }
    case GO_NEXT_WEEK:
      return {
        ...state,
        weekStartDate: action.weekStartDate,
        weekEndDate: action.weekEndDate,
        nextMonth: action.nextMonth,
        nextYear: action.nextYear,
        week: action.week
      }
    case GO_LAST_WEEK:
      return {
        ...state,
        weekStartDate: action.weekStartDate,
        weekEndDate: action.weekEndDate,
        lastYear: action.lastYear,
        lastMonth: action.lastMonth,
        week: action.week
      }
    default:
      return state;
  }
}

export const getWeekStartDate = state => state.calendar.weekStartDate;
export const getWeekEndDate = state => state.calendar.weekEndDate;
export const getCurrentWeek = state => state.calendar.week;
