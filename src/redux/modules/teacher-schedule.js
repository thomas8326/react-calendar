// Constants
export const FETCH_TEACHER_SCHEDULE = 'FETCH_TEACHER_SCHEDULE';

// Action Creators
export function fetchTeacherSchedule({ availableTimes, bookedTimes }) {
  return {
    type: FETCH_TEACHER_SCHEDULE,
    availableTimes,
    bookedTimes
  };
}

// Reducer
export const defaultState = {
  availableTimes: [],
  bookedTimes: [],
};

export default function teacherScheduleReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TEACHER_SCHEDULE:
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

