
var randomNumber1 = (Math.floor(Math.random() * 6) + 1; //This will give a full number between 1-6
// If not sure what the code is printing, copy paste it into the console on the web of the desktop version of this file and see 
//what the values are.

//So we'll get a random number from 1-6 and we'll use this random number to select a random dice image. e.g. dice1 - dice2
//So we can use contactenation to add this number to the ed of the string 'dice' and get our random dice image.

var randomDiceImage = "dice" + randomNumber1 +".png"; //this is so clean. Imagine, and then code it. Create it in your head and code it. 
//for example "dice3.png"

//We now change the src of our image (in index.html) to that random image name. So now we aim to change the attribute value for the source
//inde.xhtml inside 'dice' div. Atm it's a static image, its hardcoded. But it should be changing based on the number that we get on the dice.
//So we have to tap into the src attribute of our element. 
//The source has the folder and name of image e.g. 'images/dice4.png'. So to add the 'images' to the name we can simply use concactenation:

var randomImageSource = "images/" + randomDiceImage; //this will give something like 'images/dice1.png' etc.

//So now we can change the src attribute of our image element:

//First we select the element we want to change: (selectrorAll because we have more than 1 image) (and to tap into the first one you just specify
//the index number e.g. 0) (We can assign this to a variable)
var image1 = document.querySelectorAll("img")[0]

//Now we have image1, so we can set its attribute by using the method setAttribute:
//(first attribute below is the name you want to change, the one we want to change is called src.)(Second parameter/input is what we want to change it to)
image1.setAttribute("Src", randomImageSource);

//Now on the website we will see that the dice on the left (player 1) will always have a random number showing. So we do the same thing for the second
//image element:

var randomNumber2 = (MAth.floor(MAth.random)() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //we don't have to write each line again.

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2) //two lines in one. 