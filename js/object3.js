// object3.js
//indexOf()
// 33이 이 배열에 있는가? 그리고 몇번째에 있는가?
// let numArr = [10, 21, 33, 54, 16, 73];
// let result = numArr.indexOf(333); // 찾는 요소가 없으면 -1 출력, 있으면 해당 요소의 인덱스 값 출력
// console.log(result);

let strAry = ["홍길동", "김길동", "홍길순", "김길순"];
strAry.forEach(function (item) {
  if (item.indexOf("홍") == 0) { // 성씨가 "홍" 인사람 >> 이름 1번 자리 index == 0
    console.log(item);
  }
});
// numAry[10, 20, 60]

// numAry(변수) => 10 ~ 50 사이이 값을 10개 지칭 math.floor(math.random*51)
// 콘솔에 출력 (forEach);
// 10 ~ 50 사이의 값이 맞는가?
let numAry = [];
for (let i = 1; i <= 10; i++) {
  let num1 = 10 + Math.floor(Math.random() * 41);
  numAry.push(num1);
}
numAry.forEach(function (item) {
  console.log(item);
});
result = numAry.every(function (item) {
  if (item >= 10 && item <= 50) {
    return true;
  } else {
    return false;
  }
}); // == (item => item >= 10 && item <= 50);
console.log(result);
// evry(function (item) {}); == 모든 (item) 요소들이 function속 조건을 만족 할 때 => true 를 내놓는다.
// some(function (item) {}); == 각(item) 요소들 중 1개라도 function속 조건을 만족 할 때 => true 를 내놓는다.