

const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secoondE1= document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    //console.log(hour, minute, second);
    
}

updateClock();
