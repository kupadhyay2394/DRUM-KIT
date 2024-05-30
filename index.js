let i;
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        var a=this.innerHTML;
        keys(a);
        animetion(a);
    })
}
document.addEventListener("keypress",function(event){
    keys(event.key);
    animetion(event.key);
})
function keys(keys){
    
            switch(keys){
                case "w":
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                case "a":
                    var audio = new Audio('sounds/kick-base.mp3');
                    audio.play();
                case "s":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                case "d":
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                case "j":
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                case 'k':
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                case 'l':
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();                    
            }
        }
    
function animetion(key){
    var an=document.querySelector("."+key);
    an.classList.add('pressed');
    setTimeout(function(){
        an.classList.remove('pressed');
    },300)
}