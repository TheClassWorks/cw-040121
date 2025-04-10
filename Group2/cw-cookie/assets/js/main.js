function getCookie(cookieName) {
  console.log(document.cookie);
  let cookieArray = document.cookie.split(";");
  console.log(cookieArray);
  let cookieValue = null;
  cookieArray.some((item) => {
    if (item.includes(cookieName)) {
      cookieValue = item.substring(item.indexOf("=") + 1);

      return true;
    }
  });

  return cookieValue;
}

let isLogin = getCookie("login-token");
console.log(isLogin);

if (!isLogin) {
  location.href = "http://127.0.0.1:5500/login.html";
}

