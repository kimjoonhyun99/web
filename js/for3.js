// for3.js

let sum = 0; // 합
let avg = 0; // 평균
let count = 0; // 숫자를 합한 횟수

// prompt를 여러번 사용하기
for (let i = 1; i <= 5; i++) {
  let str = prompt("1~10까지의 숫자를 입력하세요.");
  let inputValue = parseInt(str);
  // inputValue의 범위: 1<= X <= 10
  if (inputValue >= 1 && inputValue <= 10) {
    sum += inputValue
    count++ // 조건을 만족 했을 때 만 숫자 세기
    avg = sum / count // 평균 계산
  }
} // end of for

console.log(`누적합계: ${sum}입니다. 평균은 ${avg}입니다.`);