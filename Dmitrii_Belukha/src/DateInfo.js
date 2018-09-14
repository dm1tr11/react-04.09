class DateInfo {
  constructor() {}

  static getCurrentDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `Сегодня: ${day}.${month}.${year}`;
  }
}

export default DateInfo;
