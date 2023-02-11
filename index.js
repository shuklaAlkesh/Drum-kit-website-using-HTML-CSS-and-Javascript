
var NoOfdrum = document.querySelectorAll(".drum").length; //it will give the no of drum object are present in the index.html
for(var i=0;i<NoOfdrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var clickButton = this.innerHTML;
        // first method 
        switch(clickButton)
        {
            case "w" :{
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            }
            case "a" :{
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            }
            case "s" :{
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            }
            case "d":{
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            }
            case "j" :{
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            }
            case "k":{
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            }
            case "l" :{
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            }
        }
        

            // second method to use if else case 
        // if(clickButton==="w"){
        //     var audio = new Audio('sounds/tom-1.mp3');
        //     audio.play();
        // }
        // else if(clickButton==="a"){
        //     var audio = new Audio('sounds/tom-2.mp3');
        //     audio.play();
        // }
        // else if(clickButton==="s"){
        //     var audio = new Audio('sounds/tom-3.mp3');
        //     audio.play();
        // }
        // else if(clickButton==="d"){
        //     var audio = new Audio('sounds/tom-4.mp3');
        //     audio.play();
        // }
        // else if(clickButton==="j"){
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();
        // }
        // else if(clickButton==="k"){
        //     var audio = new Audio('sounds/snare.mp3');
        //     audio.play();
        // }
        // else{
        //     var audio = new Audio('sounds/kick-bass.mp3');
        //     audio.play();
        // }
        AnimationButton(this.innerHTML);
    });
    
}

 // this is the code when we press a key like w a s d j k l then it will create a sound
document.addEventListener("keypress", function(event){
    var clickButton = event.key;
   
        // first method 
        switch(clickButton)
        {
            case "w" :{
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            }
            case "a" :{
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            }
            case "s" :{
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            }
            case "d":{
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            }
            case "j" :{
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            }
            case "k":{
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            }
            case "l" :{
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            }
        }
        AnimationButton(event.key);
})

function AnimationButton(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100) // here 100 means 0.1sec
}
