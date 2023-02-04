const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const amPmEl = document.getElementById("am-pm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amPm = "AM";
  if (h > 12) {
    h = h - 12;
    amPm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  amPmEl.innerText = amPm;
}

setInterval(updateClock, 1000);
