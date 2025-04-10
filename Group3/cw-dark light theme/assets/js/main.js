//راه اول
// let caret = document.getElementById("caret");
// let angle = document.getElementById("angle");
// caret.addEventListener("click", () => {
//   angle.classList.toggle("caret-rotate");
// });

//راه دوم
// let arrow = document.getElementById("arrow");
// arrow.addEventListener("click", () => {
//   arrow.lastElementChild.classList.toggle("fa-angle-down"); // را میذاره و همینطور ادامه میده up را برمیداره و بخاطر خط 11 down با اولین کلیک
//   arrow.lastElementChild.classList.toggle("fa-angle-up"); // را میذاره down را برمیداره و up با کلیک بعدی
// });

//راه سوم
function myfunc() {
  let angle = document.getElementById("angle");
  angle.classList.toggle("caret-rotate");
}


