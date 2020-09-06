import { combineReducers } from 'redux';
import teacherCalendarReducer from '../redux/modules/calendar';

const storage = combineReducers({
  calendar: teacherCalendarReducer
});

export default storage;
