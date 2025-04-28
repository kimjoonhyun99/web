// function.js

function sum(num1 = 0, num2 = 0) { // 매개변수의 초기값
  let result = 0;
  result = num1 + num2;
  return result;
}

function printStar(times = 1, shape = `⭐`) {
  let str= '';
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);
}



// 함수 호출
printStar(2, '✈');
// sum(10,20);
// console.log(sum(30));

// 구구단을 출력하는 함수

function printGugudan(dan=2) {
 for (let p = 1; p <= 9; p++) {
  result = dan * p;
  document.write(`${dan} * ${p} = ${result}`);
 }
}

printGugudan(5);
