// object5.js
//Date 객체: 날짜, 시간

let now = new Date(0);
// now = new Date("2025-01-01"); // index 번호를 읽어 오는 거 같음 1월 = 0, 2월 = 1
// now.setDate(21);
console.log(now);
console.log(now.getDate() + "일 은/는 " + getKorDay(now.getDay()));
// 요일 : getDay() 0 = 일요일 1 = 화요일 ... 6 = 토요일
function getKorDay(day = 1) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
};