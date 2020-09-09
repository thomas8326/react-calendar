export class MyDate extends Date {
  oneDaySecond = 1000 * 60 * 60 * 24
  dayOfWeekMap = new Map([
    [0, 'Sun'],
    [1, 'Mon'],
    [2, 'Tue'],
    [3, 'Wed'],
    [4, 'Thu'],
    [5, 'Fri'],
    [6, 'Sat'],
  ]);

  getYear() {
    return super.getFullYear();
  }

  getMonth() {
    return super.getMonth() + 1;
  }

  getDateOfNumber() {
    return super.getDate();
  }

  getDate() {
    return super.getDate() < 10 ? '0' + super.getDate() : super.getDate().toString();
  }

  getKey() {
    return this.getYear() + '-' + this.getMonth() + '-' + this.getDate();
  }

  getHours() {
    return super.getHours();
  }

  getMinutes() {
    return super.getMinutes();
  }

  getCurrentWeek(newMyDate) {
    const myDate = newMyDate || new MyDate();
    console.log(myDate);
    const firstDayOfWeek = myDate.getDate() - myDate.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;

    const week = new Array(lastDayOfWeek - firstDayOfWeek + 1).fill().map((_, index) => {
      const tempDate = new MyDate(myDate);
      tempDate.setDate(firstDayOfWeek + index);
      return {
        key: tempDate.getKey(),
        year: tempDate.getYear(),
        month: tempDate.getMonth(),
        date: tempDate.getDate(),
        dateOfNumber: tempDate.getDateOfNumber(),
        dayOfWeek: this.dayOfWeekMap.get(index),
      }
    });

    const firstDate = week[0];
    const endDate = week[week.length - 1];

    return {
      weekStartDate: firstDate.dateOfNumber,
      lastYear: firstDate.year,
      lastMonth: firstDate.month - 1,
      weekEndDate: endDate.dateOfNumber,
      nextMonth: endDate.month - 1,
      nextYear: endDate.year,
      week: week
    };
  }

}
