// for4.js
let str = "";
str += "<h3>구구단출력</h3>";
str += "<table class= 'table table-striped'>";
str += "<tbody>";
for (let p = 1; p <= 9; p++) {
  str += "<tr>"
  let m = p;
  for (let n = 1; n <= 9; n++) {
    str += `<td>${m} X ${n} = ${m*n}</td>`;
  }
  str += "</tr>";
}
str += "</tbody>";
str += "</table>";
str += "<table border>";
document.write(str);