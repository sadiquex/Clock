const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const date = document.querySelector(".date");
const centerPoint = document.querySelector(".center-point");
const toggle = document.querySelector(".toggle");

// array for days and months
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// toggle dark mode
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

// clock functionality
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)})deg`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)})deg`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)})deg`;
}

// function scale(number, inMin, inMax, outMin, outMax) {
//   return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// }

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};



// number - hand on clock
// inMin -  (timeMin)
// inMax -  (timeMax)
// outMin -  (clockMin)
// outMax -  (clockMax)


setTime();

// keep calling it for it to keep running
setInterval(setTime, 1000)
