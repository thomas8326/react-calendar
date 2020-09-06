// Constants
export const FETCH_TEACHER_CALENDAR = 'FETCH_TEACHER_CALENDAR';

// Action Creators
export function fetchTeacherCalendar({ availableTimes, bookedTimes }) {
  return {
    type: FETCH_TEACHER_CALENDAR,
    availableTimes,
    bookedTimes
  };
}

// Reducer
export const defaultState = {
  availableTimes: [],
  bookedTimes: [],
};

export default function teacherCalendarReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TEACHER_CALENDAR:
      return {
        ...state,
        availableTimes: action.availableTimes,
        bookedTimes: action.bookedTimes,
      };
    default:
      return state;
  }
}

export const getAvailableTimes = state => state.calendar.availableTimes;
export const getBookedTimes = state => state.calendar.bookedTimes;
