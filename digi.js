let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#secs");

setInterval(()=>{
    let current = new Date();

    hrs.innerHTML = (current.getHours()<10?"0":"") + current.getHours();
    min.innerHTML = (current.getMinutes()<10?"0":"") + current.getMinutes();
    sec.innerHTML = (current.getSeconds()<10?"0":"") + current.getSeconds();
},1000)




