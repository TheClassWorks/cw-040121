console.log("کوکی ها: " + document.cookie);

let buttonElem = document.querySelector("button");

buttonElem.addEventListener("click", () => {
  let zaman = new Date();
  console.log(zaman);
  console.log(zaman.getTime());
  console.log(zaman.getTime() + 2 * 24 * 60 * 60 * 1000);
  zaman.setTime(zaman.getTime() + 2 * 24 * 60 * 60 * 1000);
  console.log(zaman);

    document.cookie = `username=mansuri;path=/;expires=${zaman}`;
});
