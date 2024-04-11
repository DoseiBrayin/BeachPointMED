import dayjs from "dayjs";

//the dayjs library allow us to get the current date and to transform it

//pass the current year and month as a default if nothing is send
export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");

  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  //An array to store all the data of the current month to display in the calendar

  const arrayOfDate = [];

  //the frist days that are not of the month in every calendar

  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    //is goes as an object to be able to apply different styles if are not of the current month in react
    arrayOfDate.push({
      currentMonth: false,
      date: firstDateOfMonth.day(i),
    });
  }

  //The days of the current month

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  //The remaining days that the month need of the other month to be completed with 42 days

  const remaining = 42 - arrayOfDate.length;

  //Adding those days to the array

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }

  return arrayOfDate;
};

export const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
