// 숙제.js

num1 = 40 + Math.floor(Math.random() * 31); // 40 + 0 <= num1 <31 == 70
num2 = 40 + Math.floor(Math.random() * 31);

console.log(num1, num2);

if (num1 > num2) {
  console.log("둘중 더 큰 값은" + num1 + "이고, 더 작은 값은" + num2 + "이다");
  ;
} else if (num1 < num2) {
  console.log("둘중 더 큰 값은" + num2 + "이고, 더 작은 값은" + num1 + "이다");
}
 else {
  console.log ("두 수는 크기가 같습니다.")
 }
