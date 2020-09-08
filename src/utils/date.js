export class MyDate extends Date {
  current;

  constructor(myDate) {
    super();
    this.current = myDate;
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

}
