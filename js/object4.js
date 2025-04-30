// object4.js
//fillter()

// let numAry = [20, 27, 33, 42, 19, 63, 52];
// let filterAry = numAry.filter(function (item, idx, ary) {
//   if (item % 2 == 0) {
//     return true;
//   }
//   return false;
//   // return X == undefined => falsy
// });

// console.log(filterAry);

//slalary 가 5000이 넘는 사원들을  empAry 저장.

let data = JSON.parse(json);
let empAry = data.filter(function (item, idx, ary) {
  if(item.salary >= 5000) {
    return true;
  } else {
    return false;
  }
}); // == (item => item.salary >= 5000);
console.log(empAry);