// object2.js
//배열을 내장한 객체: newArry()또는 []
//이에 관련한 메소드 종류: push, pop, unshiftm shift => forEach(각각 객체에게)

let arr1 = [10, 20, 30]; //
arr1[3] = 40; // arr1 인덱스 3(4번째 자리)에 40이라는 값을 담겠습니다.
arr1.push(50); // 추가 메소드 > 마지막 인덱스 자리 + 1, 그 값에 50을 담겠습니다. 
arr1.unshift(60); // arr1 배열 index 0번에 60을 끼워 넣겠습니다
arr1.pop(); // arr1 배열 가장 마지막 index 값을 제거 하겠습니다
arr1.pop();
arr1.shift(); // arr1 배열 가장 앞 index 값을 제거 하겠습니다
// 10, (15), 20, 30 << 15를 중간에 끼워 넣고 싶다
arr1.splice(1, 0, 15, 16, 17); // 1. 1번 위치에,, 15라는 값을 
//                                2. 0일때 >> 추가 1일때 >> 대채(20 삭제)
//                                3. 15, 16, 17 이라는 값을
let result = arr1.some(item => item % 2 == 1);

console.log(result);
arr1.forEach(function (item, idx, ary) { // 이름이 없는 함수 == 익명함수
  console.log(item, idx, ary); // forEach 순서 반드시 기억하기
});
console.log(arr1);