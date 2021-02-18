// Challenge 1:Your Age in days

function ageInDays() {
    var birthYear = prompt("Enter your birth year");
    var ageInDayss = (2018 - birthYear) * 365;

    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old");

    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
// var image_id = document.getElementById('flex-box-container-2-image')
// var ts = new Date().getTime();
// image_id.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=" + ts;

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    var ts = new Date().getTime();
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=" + ts;
    div.appendChild(image);
}

// Challenge 3: Rock,Paper,Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRps());
    console.log("computer Choice", botChoice);

    results = decideWinner(humanChoice, botChoice); // [1,0]  [0.5,0.5] [0,1]
    console.log(results);

    message = finalMessage(results); // {'message' : 'You Won!' , 'color' : 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRps() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]

}
function decideWinner(yourChoice, computerChoice) {

    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {

    if (yourScore === 0)
        return { 'message': 'You Lost!', 'color': 'red' };
    else if (yourScore === 1)
        return { 'message': 'You Won!', 'color': 'green' };
    else
        return { 'message': 'You Tied!', 'color': 'Yellow' };

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)' >";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; fonst-size:60px; padding:30 px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)' >";



    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change All box Colors
var allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Classes of second classes of buttons
var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    // copyAllButtons.push(allButtons[i]);
    copyAllButtons.push(allButtons[i].classList[1]);
}
// console.log(copyAllButtons);


function buttonColorChange(buttonThingy) {
    // console.log(buttonThingy.value);
    if (buttonThingy.value === 'red')
        buttonRed();
    else if (buttonThingy.value === 'green')
        buttonGreen();
    else if (buttonThingy.value === 'reset')
        buttonColorReset();
    else if (buttonThingy.value === 'random')
        randomColors();
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}


function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}


function buttonColorReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }

}

function randomColors() {

    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < allButtons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}


// Challenge 5: Blackjack Game
// Event Listerner is better than onclick()

let blackjackGame = {

    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 13, 'Q': 12, 'J': 11, 'A': [1, 11] },

    'wins': 0,
    'losses': 0,
    'draws': 0,

    'isStand': false,
    'turnsOver': false


};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio("blackjack_assets/sounds/swish.m4a");
const winSound = new Audio("blackjack_assets/sounds/cash.mp3");
const lossSound = new Audio("blackjack_assets/sounds/aww.mp3");

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {

    if (blackjackGame['isStand'] === false) {
        let card = randomCard()
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        // showCard(randomCard(), DEALER);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    // console.log(randomIndex);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    // alert('Ouch,you just clicked me!')
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `blackjack_assets/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}


function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector("#your-box").querySelectorAll("img");
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");
        // console.log(yourImages);

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = "white";

        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style.color = "white";


        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = false;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] += blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];

    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {

    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];

    }

}

function dealerLogic() {

    blackjackGame['isStand'] = true;

    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);

    if (DEALER['score'] > 15) {
        blackjackGame['turnsOver'] = true;
        showResult(computeWinner())
        console.log(blackjackGame['turnsOver'])
    }
}

// Compute Winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // Condition : higher Score than dealer or when dealer busts but you're 21 or under
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        }

        else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }

    }
    // Condition when user busts but dealer doesnt
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
    }

    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }

    // console.log("Winnner is:", winner);
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {
        if (winner === YOU) {
            document.querySelector("#wins").textContent = blackjackGame['wins'];
            message = "You Won!";
            messageColor = "green";
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector("#losses").textContent = blackjackGame['losses'];
            message = "You Lost!";
            messageColor = "red";
            lossSound.play();
        } else {
            document.querySelector("#draws").textContent = blackjackGame['draws'];
            message = "You Drew!";
            messageColor = "black"
        }

        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColor;
    }
}