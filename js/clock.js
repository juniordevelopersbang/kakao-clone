const statusBar = document.querySelector(".status-bar");
const statusBarClock = statusBar.querySelector(".status-bar__clock");

function date() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  statusBarClock.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}: ${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  date();
  setInterval(date, 1000);
}

init();
