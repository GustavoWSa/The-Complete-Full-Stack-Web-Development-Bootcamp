function generateNumbers(){

    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    let dice1Photo = "./images/dice" + dice1 + ".png";
    let dice2Photo = "./images/dice" + dice2 + ".png";
    document.querySelector(".img1").src = dice1Photo;
    document.querySelector(".img2").src = dice2Photo;
    if (dice1>dice2){
        document.querySelector("h1").innerText = "Player 1 wins";
    } else if (dice1<dice2){
        document.querySelector("h1").innerText = "Player 2 wins";
    } else{
        document.querySelector("h1").innerText = "Draw";
    }
}

