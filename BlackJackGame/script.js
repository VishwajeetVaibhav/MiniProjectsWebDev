let sum = 0
let isAlive = false
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []


let player = {
    name: "Vishu",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips
function getRandonCard(){
     let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard === 1){
        return 11
    }else if (randomCard >=11 && randomCard<=13){
        return 10
    }
    else{
        return randomCard
    }
}

function startGame(){

    let firstCard = getRandonCard()
    let secondCard = getRandonCard()
    let cards = [firstCard,secondCard]
    let sum = firstCard + secondCard
    isAlive = true
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    
    for(let i = 0 ;i<cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent = "Sum: "+ sum
    if(sum <= 20){
        message="Do you want to draw a new card ? "
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! "
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}
function newCard(){

     if(isAlive === true && hasBlackJack === false){
        let card = getRandonCard()
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame() 
     }

}