let themeSwicher = document.querySelector(".themeSwicher");

themeSwicher.addEventListener("click", () => {
  themeSwicher.classList.add("bi-brightness-high");
  themeSwicher.classList.remove("bi-moon");
  document.querySelector("html").setAttribute("data-bs-theme", "dark");
  localStorage.setItem("theme", "dark");
});

window.addEventListener("load", () => {
    console.log(localStorage.getItem("theme"));

    
  if (localStorage.getItem("theme") == "dark") {
    console.log("test");
    
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
  }
});
