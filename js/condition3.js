// condition3.js
let result = Math.floor(Math.random() * 101); // 0 <= X < 101
console.log(result);
// 100 ~ 90 => "A"
// ~80 +> "B"
// ~70 => "C"
// ~60 => "D"
// 그외 "F"
if (result >= 90) {
  console.log("A")
} else if (result >= 80) {
  console.log("B")
} else if (result >= 70) {
  console.log("C")
} else if (result >= 60) {
  console.log("D")
} else {
  console.log("F")
} // else 뒤에는 조건을 붙이지 않는다.