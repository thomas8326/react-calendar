export class MyDate extends Date {
  current = new Date();
  dayOfWeekMap = new Map([
    [0, 'Sun'],
    [1, 'Mon'],
    [2, 'Tue'],
    [3, 'Wed'],
    [4, 'Thu'],
    [5, 'Fri'],
    [6, 'Sat'],
  ]);

  constructor(myDate) {
    super();
    if (myDate) {
      this.current = new Date(myDate);
      console.log('In');
    }
  }

  getYear() {
    return this.current.getFullYear();
  }

  getMonth() {
    return this.current.getMonth() + 1;
  }

  getDate() {
    return this.current.getDate() < 10 ? '0' + this.current.getDate() : this.current.getDate();
  }

  getKey() {
    return this.getYear() + '-' + this.getMonth() + '-' + this.getDate();
  }

  getHours() {
    return this.current.getHours();
  }

  getMinutes() {
    return this.current.getMinutes();
  }

  getCurrentWeek() {
    const firstDayOfWeek = this.current.getDate() - this.current.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;

    const week = new Array(lastDayOfWeek - firstDayOfWeek + 1).fill().map((_, index) => {
      const myDate = new MyDate(this.current.setDate(firstDayOfWeek + index));
      return {
        key: myDate.getKey(),
        year: myDate.getYear(),
        month: myDate.getMonth(),
        date: myDate.getDate(),
        dayOfWeek: this.dayOfWeekMap.get(index),
      }
    });

    return {
      weekStartDate: new MyDate(this.current.setDate(firstDayOfWeek)).getTime(),
      weekEndDate: new MyDate(this.current.setDate(lastDayOfWeek)).getTime(),
      week: week
    };
  }

}
