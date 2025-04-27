// 숙제3.js

let num1 = Math.floor(Math.random() * 101); // 0~100 사이 임의의 숫자

console.log(num1);

if (num1 >= 95) {
  console.log("A+");
} else 
if (95 > num1 >= 90) {
  console.log("A");
} else
if (90 > num1 >= 85) {
  console.log("B+");
} else
if (85 > num1 >= 80) {
  console.log("B");
} else
if (80 > num1 >= 75) {
  console.log("C+");
} else
if (75 > num1 >= 70) {
  console.log("C");
} else
if (70 > num1 >= 65) {
  console.log("D+");
} else
if (65 > num1 >= 60) {
  console.log("D");
} else console.log("F");