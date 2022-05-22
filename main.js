// mengambil input
const input = document.getElementById("project");
const ul = document.querySelector("ul");
const plus = document.querySelector("#plus");
const klik = document.getElementById("close");

// mengambil element pada logo
plus.addEventListener("click", function () {
  // membuat element baru
  const newUl = "<li class=list> <span onclick='toggle(this)'>" + input.value + "<button  onclick ='removeItem(this)'>x</button>" + "</span> </li>";
  // meletakan  tempat ul
  ul.insertAdjacentHTML("afterbegin", newUl);

  // KOSONGKAN TEXT JIKA SUDAH DI INPUT
  input.value = "";
});
function toggle(el) {
  el.classList.toggle("done");
}

function removeItem(el) {
  el.parentElement.remove();
}
