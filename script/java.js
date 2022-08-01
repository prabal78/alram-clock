const currentTime = document.querySelector("h1"),
content  = document.querySelector(".content"),
 select_menu = document.querySelectorAll("select"),
 setAlarmbtn = document.querySelector("button");
 let AlaramTime, isAlarmset = false;
const  reingtone = new Audio("/audio/sound1.mp3 ");

console.log(select_menu);
//for hours
for(let i = 12 ; i> 0 ; i--){
   i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    select_menu[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
// for min
for(let i = 59 ; i>0 ; i--){
    i = i < 10 ? "0" + i : i;
     let option = `<option value="${i}">${i}</option>`;
     select_menu[1].firstElementChild.insertAdjacentHTML('afterend',option);
 }
// for am/pm
 for(let i = 2 ; i>0 ; i--){
    let ampm = i==1 ? "AM" : "PM" ;
     let option = `<option value="${ampm}">${ampm}</option>`;
     select_menu[2].firstElementChild.insertAdjacentHTML('afterend',option);
 }
 
 setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s= date.getSeconds(),
    ampm = "AM";
    
    
    if(h>=12){
        h = h - 12 ;
        ampm = "PM";
    }
    
    h = h == 0 ? h = 12 : h;
    
    h = h<10 ? "0" + h : h ;
    m = m<10 ? "0" + m : m ;
    s = s<10 ? "0" + s : s ;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    if(AlaramTime == `${h}:${m} ${ampm}` ){
        reingtone.play();
        reingtone.loop = true;
    }
 }, 1000);
 
function setAlarm(){
    if(isAlarmset){
        AlaramTime = "";
        reingtone.pause();
        content.classList.remove("disable");
        setAlarmbtn.innerText = "Set Alarm";
        return isAlarmset = false;
    }
    let time = `${select_menu[0].value}:${select_menu[1].value} ${select_menu[2].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM") ){
       return alert("fill al fields");
    }
    isAlarmset = true;
    AlaramTime = time;
    content.classList.add("disable");
    setAlarmbtn.innerText = "Clear Alarm";
    console.log(time);

}
setAlarmbtn.addEventListener('click', setAlarm); 

