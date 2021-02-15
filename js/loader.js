const LOADER = document.querySelector("#loader");
function vanish() {
  LOADER.classList.add("disappear");
}
window.addEventListener("load", vanish);
