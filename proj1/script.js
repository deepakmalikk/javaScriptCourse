var counter = document.getElementsByClassName("counter")
var followers = document.getElementsByClassName("followers")

var follow =0;
setInterval(()=>{
   if(follow<=1000){
    counter[0].innerHTML =follow;
    follow++;
   }
},0.2)

setTimeout(() => {
    followers[0].innerHTML ="New followers on instagram"
}, 1000);