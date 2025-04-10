let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let pElem = document.querySelector("p");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value == "ali@gmail.com" && password.value == "123") {
    setCookie("login-token", email.value, 5);
    setCookie("job", "developer", 2);
    location.href = "http://127.0.0.1:5500/admin-panel/index.html";
  } else {
    console.log("invalid username or password");
  }
});

function setCookie(cookieName, cookieValue, expDay) {
  let zaman = new Date();
  zaman.setTime(zaman.getTime() + expDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${zaman}`;
}
