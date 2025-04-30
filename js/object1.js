// object1.js
// 객체지향(Java)+(함수) << 컴파일 작업 필요, 함수기반(JavaScript)+객체 << 인터프리터
// 컴파일 작업 이란? 인간 이해 소스코드 >> 컴퓨터 이해 기계어 로 번역 하는 작업
let obj = {
  name: "홍길동",
  age: 20,
  showName: function () {
    console.log(this);
    return `이름은 ${this.name} 입니다`
  },
  setName(name) {
    this.name = name; // 위 아래 코드는 뜻하는게 같다.
  },
  showAge: function () {
    return `나이는 ${this.age}입니다`
  },
  setAge(age) {
    this.age = age;
  }
}
obj.setName("김길동")
let result = obj.showName();
console.log(result);

// class 생성
class person {
  //name, age: 속성
  constructor(name, age) { //cpnstructor: 생성자
    this.name = name;
    this.age = age;
  }
  //showNAme(), setName(): 메소드
  showName () {
    return `이름은 ${this.name}입니다`;
  }
  setName(name) {
    this.name = name;
  }
  showAge(age) {
    return `나이는${this.age}입니다`
  }
  setAge(age) {
    this.age = age;
  }
}
let choi = new person("최민식", 22); //인스턴스를 생성한다
choi.setName("최민수");
console.log(choi.showName());

let park = new person("박홍식", 30); // 새로운 인스턴스 생성

//this => 1.객체   안에서 => 자신을 지칭함
//        2.함수   안에서 => 안에서는 window를 가리키는 객체
//        3.이벤트 안에서 => 이벤트 발생 위치도 자기 자신을 지칭함

// function sum() {
//   console.log(this);
// }

// //함수 호출
// sum();

// obj.showName();