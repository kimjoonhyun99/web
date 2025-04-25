// variable3.js
// 연산자 (+, -, /, *, %)
let num1 = document.querySelector('#num1').value; // 
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); // parseInt로 문자열을 숫자로 변경 가능 >> "30" -> 30
num2 = parseInt(num2); // 위와 같이  "17" -> 17
num1++; // num1에 1을 더해서 num1이 영구적 31이 됨
num1++; // 32
num1++; // 33
let result = num1++ + --num2; // "33" + "17-1=16" = 49 계산 이후에 -> num1 >> 34로 +1이 된다
// let result = num1 + num2;
console.log(result, num1, num2);
// result 값을 input#result의 value 속성에 대입한다.
document.querySelector('#result').value = result;