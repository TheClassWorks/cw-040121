// console.log("test");

let username = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (username.value == "ali@gmail.com" && password.value == "123") {
    setCookie("login-token", username.value, 5);
    setCookie("job", "developer", 1);
    location.href = "http://127.0.0.1:5500/adminpanel/index.html";
  } else {
    console.log("invalid username or password");
  }
});

function setCookie(cookieName, cookieValue, expDay) {
  const zaman = new Date();
  zaman.setTime(zaman.getTime() + expDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${zaman}`;
}
