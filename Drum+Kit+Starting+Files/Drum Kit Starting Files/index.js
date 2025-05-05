document.querySelectorAll("button.drum").forEach(button =>{
    button.addEventListener("click", function (event){
         let buttonInnerHtml = this.innerHTML;
        PlaySound(buttonInnerHtml);
        changeAppearance(buttonInnerHtml);
    });
})
document.addEventListener("keydown", function (event) {
    PlaySound(event.key);
    changeAppearance(event.key);
});

function PlaySound(key){
    switch (key.toLowerCase()){
        case "w":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            const kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    }
}
function changeAppearance(key){
    let activebutton = document.querySelector("." + key.toLowerCase());
    if (activebutton) {
        activebutton.classList.add("pressed");
        setTimeout(() => {
            activebutton.classList.remove("pressed");
        }, 100);
    }
}
