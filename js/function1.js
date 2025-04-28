// function1.js
// 2개의 수를 더하고 큰 값에 10을 더하고 작은 값에 5를 더한 후 두 수의 합을 구하는 기능

//함수의 정의 파라미터
function sum(parameter1, parameter2) {
   let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 * 10) + (parameter2 - 5);
  } else {
      result = (parameter2 * 10) + (parameter1 - 5);
    }
    return result; // return: 함수를 호출한 영역으로 결과를 반환 한다.
    // console.log(`결과값 ${result}`);
  }

// 같은 함수를 여러번 쓰게 하지 않기 위함 << 시간 단축

result = sum(5, 7);

document.write(`결과값 ${result}`);
