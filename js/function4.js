// function4.js

// 함수 + 반복문 + 배열 
let num = 10; // 변수 하나에 2개의 값을 담는 것은 불가능함. "10,홍길동" >> 1개의 문자열
let numAry = [10, 20]; // new Array 배열 객체
// 배열은 index를 사용해서 위치를 가지고 있음. 1번은 0이다. >> numAry[0];
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hong"; // (X) 덮어 쓸 수 있다!
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;


// console.log(numAry[4]);
console.log(`배열의 크기: ${numAry.length}`);

// 배열 + for반복문 = 궁합이 좋다
for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
}

// 연산가능
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

// 배열 요소의 합
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] > 50) {
    sum += numAry[i];
  }
}
console.log(`모든 수의 합은 ${sum} 이다.`);

// 배열변수 ; ages 27, 28, 25, 30, 31, 36
// 가장 나이가 많은 사람 출력
//max(초기값: 0)
function getMax(max) {
  let ages = [27, 28, 25, 30, 31, 36];
  max = 0;
  for (let i = 0; i < ages.length; i++) {
    if (max < ages[i]) {
      max = ages[i];
    }
  }
  console.log(`가장 많은 나이는 ${max}입니다.`);
}

//함수 getMinValue (매개값으로 배열) 가장 작은 값을 반환,
function getMinValue(numAry = []) {
  let min = numAry[0];
  for (let i = 0; i < numAry.length; i++) {
    if (min > numAry[i]) {
      min = numAry[i];
    }
  }
  return min
}
let result = getMinValue([20, 27, 17, 30, 15]);
getMinValue(4);
console.log(`결과는 ${result}입니다`)
