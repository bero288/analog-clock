/*
function runTheClock() {
  let date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  let hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;
  let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
  let secPosition = (sec * 360) / 60;
  HOURSHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTESHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDSHAND.style.transform = "rotate(" + secPosition + "deg)";
}
setInterval(runTheClock, 1000);*/
const HOURSHAND = document.querySelector(".hour");
const MINUTESHAND = document.querySelector(".minute");
const SECONDSHAND = document.querySelector(".seconds");
setInterval(moveTheCLock, 1000);
function moveTheCLock() {
  const CURRENTDATE = new Date();
  const SECONDSRATIO = CURRENTDATE.getSeconds() / 60;
  const minutesRATIO = (CURRENTDATE.getMinutes() + SECONDSRATIO) / 60;
  const HOURSRATIO = (CURRENTDATE.getHours() + minutesRATIO) / 12;
  setRotation(HOURSHAND, HOURSRATIO);
  setRotation(MINUTESHAND, minutesRATIO);
  setRotation(SECONDSHAND, SECONDSRATIO);
}
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
moveTheCLock();
