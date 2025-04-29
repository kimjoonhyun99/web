//function5.js

let names = ["홍길동", "박춘식", "김민수", "이영식"];

let search = prompt("검색할 이름 입력: ");
let i = 0;
let exists = false;
for (let i = 0; i < names.length; i++) {
  while (true) {
    if (i == names.length) {
      break;
    }
    if (search == names[i++]) {
      exists = true;
      break;
    }
    if (exists) {
      alert("있음");
    } else {
      alert("없음");
    }
  }
} // 모르겠다.
// if (prompt == names[i]) {
//   alert(`있음`);
//   break;
// } else {
//   alert(`없음`);
// }