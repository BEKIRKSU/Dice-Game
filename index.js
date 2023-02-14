var randomNumber1 = (Math.floor(Math.random() * 6) + 1); 
// If not sure what the code is printing, copy paste it into the console on the web of the desktop version of this file and see 
//what the values are.

//So we can use contactenation to add this number to the ed of the string.

var randomDiceImage = "dice" + randomNumber1 +".png"; //this is so clean. Imagine, and then code it. Create it in your head and code it. 
//for example "dice3.png". You name the var yourself every time.

var randomImageSource = "images/" + randomDiceImage; //this will give something like 'images/dice1.png' etc.

//So now we can change the src attribute of our image element:

var image1 = document.querySelectorAll("img")[0];

//(first attribute below is the name you want to change, the one we want to change is called src.)(Second parameter/input is what we want to change it to)
image1.setAttribute("Src", randomImageSource); //This will keep giving us a random number now.

//So we do the same thing for the second
//image element:

var randomNumber2 = (Math.floor(MAth.random)() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //we don't have to write each line again.

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2) 

//Now we can change the inner HTML of the title depending on the result of the dice roll: (selector, because we only have one attribute to change)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLayer 2 Wins!"
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}

//Could use getElementById or getElementByTagName instead of querySelector/All etc. Also, some of the code above can be shortened or
//put on different lines / or merged on one line etc.