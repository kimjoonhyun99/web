// fuction숙제3.js

diff(100,700)

function diff (num1,num2) {
  if (num1 > num2) {
    result = num1 - num2;
  } else
  if (num1 < num2) {
    result = num2 - num1;
  } else { result = 0;}
  document.write(`두 수의 차이는 ${result}입니다`);
}