const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const time = document.querySelector(".time");
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
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode';
    } else {
                html.classList.add("dark");
                e.target.innerHTML = "Light Mode";
    }
})

// clock functionality
function setTime () {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();


}
setTime();