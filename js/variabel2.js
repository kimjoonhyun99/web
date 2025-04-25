// variable2.js
let num1 = 100; // int num1; 자바는 변수 선언이 널널 하다
console.log(typeof num1);
num1 = "hundred";

let num_2 = 200; // 변수에 되도록 대문자는 사용하지 말자.
let nameOfFriend = "홍길동";

let birthOfDate = new Date();
console.log(typeof birthOfDate); // O vs o 둘이 다른 문자로 인식함 >> 언더 바 (_) 써도 되긴 하지만 낙타표기법으로 많이 씀
// birthOfDat는 객체(?) 타입 변수

let isOk = true;
isOk = 10 < 5; //false
isOk = 10 > 5; //true

if (isOk) {
  //isOk 라는 값이 ture 일 경우 {} 블럭을 실행합니다.
  console.log('isOk는 참입니다.');
}

// 배열: 어렵다. 배열의 값을 상상해서 집어 넣는 과정이 힘듦.
// 지금은 하나의 변수만을 지정해서 넣지만 [] 를 이용해 여러 변수를 지정 할 수 있다
// ex) [100, 200, 250]

let numAry = [10, 20, 25, 31]; // 배열의 1번째 값 >> 0 = 인덱스는 0부터 시작.
console.log(numAry[0]); // 색 없는 글자 >> 문자 배열 보라색 글자 >> 숫자 배열

let strAry = ["Hello", "Nice", "Good", 300]; // 문자열을 담아놓은 배열, 안에 숫자 넣어도 에러는 안남 가능한 통일해서 넣자. 2025.04.25

// 객체(object) >> 키: 값의 형태(?) 적절한 이름을 지정해주자
let person = {
  name: "홍길동",
  age: 20,
  height: 158.9,
  weight: 58.3,
  personInfo: function() { // 힘누는 기능으로 나타낼 수 있다. << 이름과 나이를 출력
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
personInfo 
// 중괄호 = 객체 obj(변수)에 여러 정보를 저장

console.log(person.name); // 객체 뒤에 . 을 붙여서 속성을 나타내줄 수 있다 ex)js1에 있는 item.value

// undefied. null
let whatIsThis;
whatIsThis = document.querySelector('#userValu'); //document는 요소를 보여주는 영역으로 생각하자. >> querySelector는 영역 안에서 ()를 찾겠습니다.
console.log(whatIsThis); // 변수만 선언 해놓고 아무것도 지정 하지 않음 >> undified , 변수를 찾았지만 객체를 찾지 못했을 때 나타남 = null <<이놈 데이터 타입은 오브젝트임

