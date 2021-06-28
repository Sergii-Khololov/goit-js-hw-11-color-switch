const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  bodyColor: document.querySelector("body"),
  startButton: document.querySelector('button[data-action="start"'),
  stopButton: document.querySelector('button[data-action="stop"'),
};

refs.startButton.addEventListener("click", start);
refs.stopButton.addEventListener("click", stop);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
}

let intervalColorChange = undefined;

function start() {
  intervalColorChange = setInterval((randomNumber) => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);
  refs.stopButton.removeAttribute("disabled");
  refs.startButton.setAttribute("disabled", true);
}

function stop() {
  clearInterval(intervalColorChange);
  refs.startButton.removeAttribute("disabled");
  refs.stopButton.setAttribute("disabled", true);
}

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const btnStart = document.querySelector('data-action="start"');
// const btnStop = document.querySelector('data-action="stop"');

// btnStart.addEventListener('click', () => btnStart);
// btnStop.addEventListener('click', () => btnStop);

// ==========

// function background(){
//     var colorArray = ["#14183b", "#002e2e", "#0d2d40", "#173052", "#194759", "#296b73"];
//     function change(newcolor){
//         document.body.style.backgroundColor=newcolor;
//     }
//     colorArray.forEach(function(color){
//         setTimeout(change(color), 1000);
//     });
// }

// var colorArray =  [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

//  var count = 0;

// setInterval(function(){
//     document.body.style.backgroundColor = colorArray[count];
//     count++;
//     if(count == colorArray.length) {
//         count = 0;
//     }
// }, 1000);
