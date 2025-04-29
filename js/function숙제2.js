// function숙제2.js

function sumUpTo (num1) {
  let result = 0;
  for (i = 1; i <= num1; i++) {
    if (num1 < 0) {
      break;
    }
    result = result + i;
  }
  document.write(`1 부터 ${num1}까지의 합은 ${result}입니다`);
}

sumUpTo(40);