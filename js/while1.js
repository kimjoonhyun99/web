// while1.js
// 1 ~ 10 까지의 값중에서 홀수값만 콘솔에 출력
// let num = 0
// for(i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }
// 반복횟수 상관X 조건을 만족할 동안 만 반복.
// let no = 1;
// while(true) {
//   if (no % 2) {
//   console.log(no);
//   }
//   if (no >= 10) {
//     break; // 반복 종료
//   }
//   no++; // 증감
//} 
// 조건문의 앞, 뒤를 적절히 배치 하기.

//임의의 값(0 ~ 100)을 생성하다가 50보다 작은 값이 나오면 반복 중단

let running = true;
while(running) {
  let num = Math.floor(Math.random()*101);
  console.log(num);

  if (num == 100) { // 종료 조건
    // break;
    running = false;
  }
}