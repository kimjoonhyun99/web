// condition.js
let num1 = prompt("숫자를 입력하세요!!"); // 사용자가 적은 값이 변수에 담겨진다.
console.log(num1);
num1 = num1 % 2 == 1;

// 짝수 / 홀수 판별

if (num1) {
  console.log('참');
} else {
  console.log('거짓');
}

