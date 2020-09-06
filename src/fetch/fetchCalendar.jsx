import { fetchTeacherSchedule } from '../redux/modules/teacher-schedule';
import data from '../mock/calendar-mock.json';

export default function fetchCalendar() {
  return (dispatch) => {
    dispatch(fetchTeacherSchedule({
      availableTimes: data.available,
      bookedTimes: data.booked
    }));
    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   Accept: "application/json"
    // });
    // fetch('/mock/calendar-mock', { headers })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);

    //     if (res.error) {
    //       throw (res.error);
    //     }
    //     dispatch(fetchTeacherCalendar(res.available, res.booked));
    //     return res.products;
    //   })
    //   .catch(() => {
    //     // do error
    //   });
  };
}

