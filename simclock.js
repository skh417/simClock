const clockContainer = document.getElementsByClassName("clockSection")[0];
const myClock = document.getElementById("clock");
console.log(myClock);

const timer = () => {
  let timeData = new Date();
  let hour = timeData.getHours();
  let min = timeData.getMinutes();
  let sec = timeData.getSeconds();
  // console.log(`현재시간 ==> ${hour}:${min}:${sec}`);
  myClock.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    min < 10 ? `0${min}` : `${min}`
  }:${sec < 10 ? `0${sec}` : `${sec}`}`;
};

const init = () => {
  timer();
  setInterval(timer, 1000);
};

init();
