// Constants
export const FETCH_TEACHER_SCHEDULE = 'FETCH_TEACHER_SCHEDULE';

// Action Creators
export function fetchTeacherSchedule({ availableTimes, bookedTimes }) {
  const timeConverter = (times) => {
    times.map((start, end) => {
      return {
        start: {

        }
      }
    })
  }


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

export const getAvailableTimes = state => state.teacherSchedule.availableTimes;
export const getBookedTimes = state => state.teacherSchedule.bookedTimes;

