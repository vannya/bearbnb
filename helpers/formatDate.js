module.exports = date => {
  let month = date.toString().slice(4, 7);
  month = monthToNum(month);
  const day = date.toString().slice(8, 10);
  const year = date.toString().slice(11, 15);
  return month + day + year;
};

function monthToNum(month) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const index = monthNames.indexOf(month);
  return index + 1;
}
