// condition.js
//switch . . case 문
/*
let num1 = prompt("1, 2, 3 중에 입력하세요.");

switch(num1) {
  case "1": console.log("1을/를 선택");break;
  case "2": console.log("2을/를 선택");break;
  case "3": console.log("3을/를 선택");break;
  default: console.log("1, 2, 3 중에 선택하세요.");
}
*/

//1~100 임의의 값
let result = Math.floor(Math.random() * 101);
console.log(result);

result = Math.floor(result/10);

switch(result) {
  case 10:
  case 9: console.log("A");break
  case 8: console.log("B");break
  case 7: console.log("C");break
  case 6: console.log("D");break
  default: console.log("F");
}
