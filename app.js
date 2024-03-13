 const endDate= "08 March 2024 12:37 AM"

 document.getElementById("end-date").innerText = endDate;
 const inputs = document.querySelectorAll("input") 

 function clock(){
    const end =  new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    // console.log(diff);

    if(diff<0)return;

    //day
    inputs[0].value = Math.floor(diff/3600/24); 

    //hour left
    inputs[1].value = Math.floor(diff/3600)%24;

    //mins left
    inputs[2].value = Math.floor(diff/60)%60;

    //secs left
    inputs[3].value = Math.floor(diff)%60;


 }

 clock()

 setInterval(
    ()=> {
        clock()
    },1000)
 