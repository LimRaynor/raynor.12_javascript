console.log(getWeekDay(2022, 6, 21)); // 원석이 생일
console.log(getWeekDay(2022, 12, 12));

function getWeekDay(year, month, date) {

    let weekNames = ['일', '월', '화', '수', '목', '금', '토'];
    let targetDate = new Date(year, month - 1, date);
    let dayNumber = targetDate.getDay();

    return weekNames[dayNumber];
}