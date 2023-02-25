const endDate = '25 February 2023 4:00 PM';

document.getElementById("endDate").innerText=endDate;

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds')


function clock(){
  const end = new Date(endDate);
  const now = new Date();
  const difference = (end - now) / 1000;


  if(difference < 0) return;
  // converting to days
  days.innerText = Math.floor((difference / 3600) / 24);
  // converting  to hours
  hours.innerText = Math.floor((difference / 3600) % 24);
  // converting  to mins
  minutes.innerText = Math.floor((difference / 60)% 60);
  // converting to seconds
  seconds.innerText = Math.floor((difference % 60))
}

//initial call
// clock();

setInterval(
    ()=>{
        clock()
    },1000
)