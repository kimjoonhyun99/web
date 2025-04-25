// condition1.js 조건문
let isTrue = true;
let num1 = 5;
let num2 = 10;
isTrue = num1 < 5; // false
isTrue = --num1 < 5; // 5 - 1 = 4 가 되고 true
isTrue = --num1 <= 4 && num2++ == 10; // ture 'and' ture 임으로 true , num1 = 4 -1 = 3,이후 계산에서 num2 = 10 + 1 = 11
isTrue = ++num2 % 2; // true (1)/ false => truthy / falsy (0, "", null, undified, NaN) = 이런 애들은 false로 확인
console.log(num1, num2);


if (isTrue) {
 // isTrue 가 참 일때 => if 블럭 실행
console.log('참');
} else {
  console.log('거짓');
 // isTrue 가 거짓 일때 => else 블럭 실행
}