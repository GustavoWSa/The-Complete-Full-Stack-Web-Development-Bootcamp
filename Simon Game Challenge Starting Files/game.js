let numbersGenerated = [];
let userClicked = [];
let roundStarted = false;

$(document).on("keydown", function () {
    if ($('body').hasClass('game-over')){
        $('body').removeClass('game-over');
    }
    if (!roundStarted) {
        $("h1").text("Memorize...");
        roundStarted = true;
        startNextRound();
    }
});

function startNextRound() {
    userClicked = [];
    const nextNum = generateRndNumber();
    numbersGenerated.push(nextNum);
    lightUp(numbersGenerated);
}

function generateRndNumber() {
    return Math.floor(Math.random() * 4);
}

function lightUp(sequence) {
    let delay = 0;
    for (let i = 0; i < sequence.length; i++) {
        const id = sequence[i];
        setTimeout(() => {
            $(`#${id}`).fadeOut(100).fadeIn(100);
        }, delay);
        delay += 500;
    }
}
function playAudio (id){
    switch(id){
        case "0":
            const green = new Audio('sounds/green.mp3');
            green.play();
            break;
        case "1":
            const red = new Audio('sounds/red.mp3');
            red.play();
            break;
        case "2":
            const yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            break;
        case "3":
            const blue = new Audio('sounds/blue.mp3');
            blue.play();
            break;
    }

}

// Clique do jogador
$(".btn").on("click", function () {
    if (!roundStarted) return;
    const clickedId = parseInt($(this).attr("id"));
    userClicked.push(clickedId);
    $(`#${clickedId}`).fadeOut(100).fadeIn(100);
    playAudio(clickedId);
    const currentStep = userClicked.length - 1;

    if (clickedId === numbersGenerated[currentStep]) {
        if (userClicked.length === numbersGenerated.length) {
            setTimeout(() => {
                startNextRound();
            }, 1000);
        }
    } else {
        gameOver();
    }
});

function gameOver() {
    $("body").toggleClass('game-over');
    const wrong = new Audio('sounds/wrong.mp3')
    wrong.play();
    $("h1").text("Game Over! Press any key to restart");
    numbersGenerated = [];
    userClicked = [];
    roundStarted = false;
}
