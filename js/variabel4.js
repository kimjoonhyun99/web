// variable4.js
// 연산자(할당연산자 524p)

let num1 = "10";
num1 = num1 + "20"; // "1020"
num1 = num1 + "30"; //"102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40"; 뒤에 "40" 을 누적시켜 적겠다.

let num2 = 10; // ""가 붙지 않아 숫자로 판정
num2 += 20; // 30
num2 += 30; // 60

num2 = num2 - 5; // 55
num2 -= 5; // 50

num2 = num2 * 2; // 100
num2 *= 2; // 200
num2 = 10203040

// 비교연산자
console.log(num2 == num1); // 값만 비교 = 같음
console.log(num2 === num1); // 변수 종류 같이 비교 = 다름
console.log(num2 != num1); // ! = not 같지 않다 라는 뜻, 1개지만 값만 비교 => false 나옴
console.log(num2 !== num1); // 2개 지만 변수 종류도 비교 = true 나옴 아마도 3번째 칸에 있는 = 이 결정 하는 듯 함

// 논리연산자 | 조건문, 반복문 쓰다보면 값을 추적하기 힘들어 진다.
console.clear();
console.log(num1 >= num2 || num1 <= 100); // true 'or' false 임으로 true
console.log(num1 >= num2 && !(num1 <= 100)); // true 'and' !(false)= true 임으로 true