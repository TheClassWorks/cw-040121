let buttonElem = document.querySelector("#set");
let delElem = document.querySelector("#del");

buttonElem.addEventListener("click", () => {
  let zaman = new Date();
  zaman.setTime(zaman.getTime() + 2 * 24 * 60 * 60 * 1000);
  document.cookie = `username=mansuri;path=/;expires=${zaman}`;
});

delElem.addEventListener("click", () => {
  let zaman = new Date();
  zaman.setTime(zaman.getTime() - 2 * 24 * 60 * 60 * 1000);
  document.cookie = `username=mansuri;path=/;expires=${zaman}`;
});
