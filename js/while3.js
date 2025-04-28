//while3.js
//친구 이름을 입력. => prompt 사용, quit 입력 종료

function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove();
}

let str = `<table class="table">`;
str += `<table><tbody>`;
while (true) {
  let input = prompt("이름을 입력하세요.");
  if (input == "quit") {
    break; // continue
  }
  str += `<tr><td>${input}</td><td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td/></tr>`;
}
str += `</tbody></table>`;
document.write(str);