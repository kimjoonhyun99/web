// while2.js

// 몇번 반복 할지는 미지수, 사용자에게 1 ~ 10 까지 임의의 수를 입력. => prompt
// 범위 밖의 값을 입력하면 종료. => if 사용
// 입력값의 누적합을 콘솔출력 => count,sum 사용

let sum = 0, count = 0;
while (true) {
  input1 = prompt("값을 입력하세요");
  count++;
  if (input1 > 10)
    break;
  if (input1 < 1)
    break;
  sum = sum + parseInt(input1);
}
  console.log(`입력한 수의 총합은 ${sum} 입니다. 평균은 ${Math.floor(sum / count)} 입니다.`);
