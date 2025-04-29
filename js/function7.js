//function7.js

console.log(friends);

let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222"
}
// for .. in 반복문 ..(아무 변수) = > 객체가 가진 속성값 앞에 해당 밸류를 붙여서 나열한다 >> 모든 속성을 나열 할 수 있다.

// for (let prop in friend) {
  // console.log(`prop: ${prop}, value: ${friend[prop]}`);
// }

// 함수: makeRow() <= function makeRow (friend={})
function makeRow(friends = {
  name,
  age,
  phone
}) {
  let str = "";
  str += "<tr>"
  for (let a of friends) {
    str += `<td>${friends(a)}</td>`;
  }
  str += "</tr>";
  return str;
}
// let titles = ["이름","나이","연락처"]
// let tlist = "";
// tlist += "<table class='table'>";
// tlist += "<thead>" 
// for (let title of titles) {
//   tlist += `<th>${title}</th>`
// }
// tlist += "</thead>"
// tlist += "<tbody>"
// //데이터 -> row 생성.
// // for .. of 반복문 => 배열 반복 => ..에는 아무 변수나 가능!
// // for (let i = 0; i < friends.length; i++) {
// for (let a of friends) {
//   tlist += makeRow(a);
// }
// tlist += "</tbody></table>";
// document.write(tlist);