// generating the random number one and image as well
function onClick(){
    const firstRandomNum = Math.floor(Math.random()*6) + 1;
    const firstDiceImage = "images/dice" + firstRandomNum + ".png";
    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
    //generating the random number two and image as well
    const secondRandomNum = Math.floor(Math.random()*6) + 1;
    const secondDiceImage = "images/dice" + secondRandomNum + ".png";
    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
        if(firstRandomNum > secondRandomNum){
            document.querySelector('h1').innerHTML = 'Player 1 wins';
            }else if(firstRandomNum < secondRandomNum){
                document.querySelector('h1').innerHTML = 'Player 2 wins';
            }else{
                document.querySelector('h1').innerHTML = 'Draw';
            }
}



