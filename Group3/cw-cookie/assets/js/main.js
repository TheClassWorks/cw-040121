function getCookie(cookieName) {
  console.log(document.cookie);
  console.log(document.cookie.split(";"));
  let cookieArray = document.cookie.split(";");
  let cookieValue = null;
  cookieArray.some((item) => {
    // console.log(item);
    if (item.includes("login-token")) {
      console.log(item.substring(item.indexOf("=") + 1));
      cookieValue = item.substring(item.indexOf("=") + 1);
      return true;
    }
  });
  return cookieValue;
}

let isLogin = getCookie("login-token");
if (!isLogin) {
  location.href = "http://127.0.0.1:5500/login.html";
}

