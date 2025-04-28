// for1.js
// let sum = 0;
// for(let i = 1; i <= 5; i++) { //1)초기값 2)조건 3)증감식
//  sum = sum + i;
// }
// console.log("sum의 값은" + sum);

// 1 ~ 20 반복 => 나머지 연산자 사용, 짝수인 경우인 합만 구하고 싶을 때

let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}

console.log("sum의 값은" + sum);