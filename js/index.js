

var singers = document.querySelectorAll(".singers")
var Message = document.getElementById("Message")
var Character = document.getElementById("Character")
var close = document.getElementById("close")
var open = document.querySelector(".open")
var toggle = 0

for (let i = 0; i < singers.length; i++) {
    singers[i].addEventListener("click", ()=> {

        $(`.singer${i}`).slideToggle(500)
        $(`.singer${i}`).siblings(".singer").slideUp(500)
    })
}


Message.addEventListener("input", () => {
    var val = Message.value
    if (val.length >= 100) {
        Character.innerHTML = `your available character finished`
    }else{
        Character.innerHTML = `${100 - val.length}`
    }
})

open.addEventListener("click", ()=> {
    
    if (toggle == 0) {
        $(".nav").animate({width:'15%'},400)
        $(".open").animate({marginLeft:'250px'},400)
        $(".title").animate({paddingLeft:'250px'},400)
        toggle = 1
    }else if(toggle == 1){
        $(".nav").animate({width:'0'},400)
        $(".open").animate({marginLeft:'20px'},400)
        $(".title").animate({paddingLeft:'0'},400)
        toggle = 0
    }
})

close.addEventListener("click", ()=> {
    $(".nav").animate({width:'0'},400)
    $(".open").animate({marginLeft:'20px'},400)
    $(".title").animate({paddingLeft:'0'},400)
    toggle = 0
})


var countDownDate = new Date("Apr 3, 2023 0:0:0").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("D").innerHTML = days + " D" 
    document.getElementById("H").innerHTML = hours + " h" 
    document.getElementById("M").innerHTML = minutes + " m" 
    document.getElementById("S").innerHTML = seconds + " s" 

  
  }, 1000);



