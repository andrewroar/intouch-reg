const maxDate = () => {
  const today = new Date();
  var todayMonth = today.getMonth() + 1;
  var todayDay = today.getDate();
  const todayYear = today.getFullYear();
  if (todayMonth < 10) {
    todayMonth = "0" + todayMonth.toString();
  }
  if (todayDay < 10) todayDay = "0" + todayDay.toString();
  const maxDateString = todayYear + "-" + todayMonth + "-" + todayDay;
  return maxDateString;
};

module.exports = maxDate;
