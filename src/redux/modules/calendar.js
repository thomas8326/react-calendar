import { FETCH_TEACHER_SCHEDULE } from "./teacher-schedule";

// Constants
export const FETCH_CURRENT_WEEK = 'FETCH_CURRENT_WEEK';
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK';
export const GO_LAST_WEEK = 'GO_LAST_WEEK';


// export const constants = { };

// Action Creators

export function fetchCurrentWeek({ weekStartDate, WeekEndDate }) {
  return {
    type: FETCH_CURRENT_WEEK,
    weekStartDate,
    WeekEndDate
  };
}

// Reducer
export const defaultState = {
  weekStartDate: Date,
  weekEndDate: Date,
};

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TEACHER_SCHEDULE:
      return {
        ...state,
        weekStartDate: action.weekStartDate,
        weekEndDate: action.WeekEndDate,
      }
    default:
      return state;
  }
}
