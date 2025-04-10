let setBtn = document.getElementById("setBtn");
let delBtn = document.getElementById("delBtn");

setBtn.addEventListener("click", () => {
  let zaman = new Date();
  console.log(zaman);
  console.log(zaman.getTime());
  console.log(zaman.getTime() + 2 * 24 * 60 * 60 * 1000);
  zaman.setTime(zaman.getTime() + 2 * 24 * 60 * 60 * 1000);
  console.log(zaman);

  document.cookie = `username=mansuri;path=/;expires=${zaman}`;
});

delBtn.addEventListener("click", () => {
  let zaman = new Date();
  zaman.setTime(zaman.getTime() - 2 * 24 * 60 * 60 * 1000);

  document.cookie = `username=mansuri;path=/;expires=${zaman}`;
});
