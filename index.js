//checking/counting the number of drum buttons
var NumberofDrumButtons = document.querySelectorAll(".drum").length;

//trigerring a sound when a button is CLICKED
for(var i = 0; i < NumberofDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var kick = new Audio ("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "k":
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();
                break;
            case "l":
                var crash = new Audio ("sounds/crash.mp3");
                crash.play();
                break;

            default:
                console.log(buttonInnerHTML);
                break;
        }

    });
    
}

//we apply the eventlistener action to the entire document i.e. checked for a keypress whenever it is clicked and the website is active
document.addEventListener("keypress",function(event){
    //passes the key pressed to the function which makes the sound according to key pressed
    MakeSound(event.key);
    //executes the animation
    buttonAnimation(event.key);
});

function MakeSound(key){
    switch(key)
    {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;   
    }

}

//function responsible for animation
function buttonAnimation(currentKey)
{
    // we need to add the class pressed to the drum class, it needs to be passed as a string i.e. "." + name of class described in css sheet
    var activebutton = document.querySelector("." + currentKey);

    //adds the class
    activebutton.classList.add("pressed");

    // gives it a timeout of 100 milliseconds
    //i.e. removed the pressed class after 100 ms
    //setTimeout :(anonymous function, time for timeout)
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

