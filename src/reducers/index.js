import { combineReducers } from 'redux';
import teacherScheduleReducer from '../redux/modules/teacher-schedule';
import calendarReducer from '../redux/modules/calendar';

const storage = combineReducers({
  teacherSchedule: teacherScheduleReducer,
  calendar: calendarReducer,
});

export default storage;
