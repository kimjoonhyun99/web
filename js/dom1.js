// dom1.js

// createElement() appendChild(), setAttribute(), querySelector()
// li 태그, span*2 태그, text

document.querySelector('#addBtn')
  .addEventListener('click', addCallBack);

// 삭제 버튼들
document.querySelectorAll('ul button').forEach(function (item) {
  item.addEventListener('click', function () {
    item.parentElement.remove();
  })
});

document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('mouseover', function () {
    item.style.backgroundColor = "cyan";
});
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";
  })
});

function addCallBack() {
  let fruit = document.getElementById('fruit').value;
  let price = document.querySelector('#price').value;

  if (fruit == "" || !price) {
    alert('값을 입력하세요');
    return;
  }

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);

  //입력값 초기화

  document.getElementById('fruit').value = "";
  document.querySelector('#price').value = 0;

}

function createLi(FruitName, FruitPrice) {
  let li = document.createElement("li");
  let sp1 = document.createElement("span");
  sp1.innerText = FruitName;

  let sp2 = document.createElement("span");
  sp2.innerText = FruitPrice + "원";
  let txt = document.createTextNode(" ");

  let btn = document.createElement("button"); // <button id="delBtn" class="btn btn-danger">삭제</button>
  btn.innerText = "삭제";
  // btn.setAttribute('class', 'btn btn-danger'); // 속성 추가
  btn.addEventListener('click', function () {
    btn.parentElement.remove();

  });

  li.appendChild(sp1);
  sp1.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li;
}