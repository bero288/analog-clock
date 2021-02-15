let darkMode = localStorage.getItem("darkMode");
const toggler = document.querySelector("#dark-toggler");
//check if the dark mode is enable
//if it's enabled turn it off
//if it's disabled turn it on
const ENABLEDARKMODE = function () {
  //add class drak mode to the body and the clock
  document.querySelector("body").classList.add("dark");
  document.querySelector(".clock").classList.add("dark");
  //update the changes in the localestorage
  localStorage.setItem("darkMode", "enabled");
};
const DISABLEDARKMODE = function () {
  //add class drak mode to the body and the clock
  document.querySelector("body").classList.remove("dark");
  document.querySelector(".clock").classList.remove("dark");
  //update the changes in the localestorage
  localStorage.setItem("darkMode", null);
};
//check the darckmode value when the page is loaded
if (darkMode === "enabled") {
  ENABLEDARKMODE();
}
toggler.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    ENABLEDARKMODE();
  } else {
    DISABLEDARKMODE();
  }
});
