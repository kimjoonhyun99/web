// function8.js
// 1.JSON.parse vs. JSON.stringfy
// 문자 => 객체  vs. 객체 => 문자
console.log(json); // 문자 열
let data = JSON.parse(json); // json 문자열 -> 객체 변환, parse 많이 씀 method를 통과시킴.
console.log(data); // 객체

// button<삭제> 만들기 
let btnTemplate = "<button onclick='deleteTr(event)'>삭제</button>";

for (let emp of data) { // {let emp i = 0; i < data.lenght; i++} = let emp of data
  console.log(emp);
}
console.clear();

// 사원 id 사원 이름 사원 성 사원 성별 사원 급여

// 이벤트
// 1.버튼을 클릭
document.querySelector('#searchBtn')
  .addEventListener('click', function () {
    let searchValue = document.querySelector('#userValue').value;
    let list = "";
    for (let emp of data) {
      if (searchValue == 'All' || searchValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list;
  });
  // 2. select "change"
  document.querySelector('select.form-control')
  .addEventListener('change', function () {
    let changeValue = document.querySelector('#selectGender').value;
    let list = "";
    for (let emp of data) {
      if (changeValue == 'All' || changeValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list; 
  })  
// innerHTML = <tbody>여기 값을 할당</tbody>
let fields = ['id', 'first_name', 'email', 'gender', 'salary'];

function makeTr(emp = {}) { // {} = object
  let str = "<tr>"
  //배열에 속성을 정의 해줌.
  // <= 이것 만 속성으로 만들어 주고 싶음
  for (let field of fields) { // in 사용 >> 배열 index >> [0, 1, 2] >> id first_name
    console.log(emp[field]); // emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`
  str += "</tr>";
  return str;
}

makeTr({
  id: 12,
  first_name: "kildong",
  email: "kildong@email.com" // of => 값들 = 12, kildong > 값이 필요하다.
});

// 사원목록(table 형식을 사용)을 출력 document.write

let elist = "<table class='table'><thead><tr>";
for (let field of fields) { // let fields = ['id', 'first_name', 'email', 'gender', 'salary'];
  elist += `<th>${field}</th>`
}
elist += `</tr></thead>`
elist += "<tbody>";
for (let emp of data) {
  elist += makeTr(emp);
}

elist += "</tbody>";
document.write(elist);