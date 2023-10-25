// let num1 = 23
// let num2 = 32
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// function add(){
//     result = num1+num2;
//     document.getElementById("result").textContent = result
// }

// function sub(){
//     result = num1-num2;
//     document.getElementById("result").textContent = result
// }

// function product(){
//     result = num1*num2;
//     document.getElementById("result").textContent = result
// }

// function divide(){
//     result = num1/num2;
//     document.getElementById("result").textContent = result
// // 

// let age = 100;
// if (age < 100){
//     console.log("You are not eligible")
// }
// else if (age===100){
//     console.log("Here is your birthday card")
// }
// else{
//     console.log("You've got card already")
// }

// let myDetails = [
//     "Fresher",
//     "MCA",
//     "None",
//     "c,c++,html...etc"
// ]
// console.log(myDetails)

// let vishu = ["Vishwjeet",23,true] 

// let message = [
//     "Hi","Hello"
// ]

// let newMessage = "How are you ! "
// message.push(newMessage)
// console.log(message)
// message.pop(newMessage)
// console.log(message)

// For loop in Javascript : 
    // start        finish      step size
// for(let count = 1; count < 11; count +=1){
//     console.log(count)
// } 

// let cards = [7,3,6]
// for(let ite = 0; ite<=cards.length; ite++){
//     console.log(cards[ite])
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time< player2Time){
//         return player1Time
//     }else if (player2Time < player1Time) {
//         return player2Time
//     }else{
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function totalRaceTime(){
//     return player1Time+player2Time
// }
// totalRace = totalRaceTime()
// console.log(totalRace)




// function rollDice(){
//     let randomNumber = Math.floor(Math.random()*6)+1
//     return randomNumber
// }

// console.log(rollDice())

// let hasCompletedCourse = true
// let givesCertificates = true
// if(hasCompletedCourse === true && givesCertificates === true){
//     generateCertificate() 
// }

//  function generateCertificate(){
//     console.log("Generate Certificate .... ")
//  }

// let likesDocumentaries = true
// let likesStartups = false

// function recommendMovie(){
//     if(likesDocumentaries===true || likesStartups === ture){
//         console.log("Hey, check out his new film we think you will like!")
//     }
// }
// recommendMovie()

// Objects in Javascript : 

// let course = {
//     title: "Learn CSS grid for free",
//     lesson: 16,
//     creator: "Per Harald Borgan",
//     length: 63,
//     level: "intermediate",
//     isFree: true,
//     tags: ["html","css"]
// }

// console.log(course.length)
// console.log(course.tags)
// console.log(course.level)


// let airbnbCastle = {
//     isVacant: true,
//     name: "New palace",
//     floor: 3,
//     previousGuests : ["vishu","Ritik","Rishabh"]
// }

// console.log(airbnbCastle.name+airbnbCastle.floor+airbnbCastle.isVacant)

// let person = {
//     name: "Vishu",
//     age: 23,
//     country: "india"
// }
// function loggingData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// loggingData()

// let age = 34
// if(age < 6){
//     console.log("No tickets for child")
// }else if ( age > 6 && age<17){
//     console.log("You will get child discount")
// }else if (age> 17 && age<26){
//     console.log("student discount for you.")
// }else if (age > 26 && age<66){
//     console.log("You will be priced full")
// }else if(age>66){
//     console.log("Senior citizen discount")
// }



// let countries = ["India","Russia","America","China","Pakistan","Afganistan"]
// countries.pop()
// console.log(countries)
// countries.push("another")
// countries.shift() //Remove element from 0th index of an array
// countries.unshift("NewAnother") //Add element in starting of an array
// console.log(countries)


// let dayOfMonth = 13
// let weekDay = "Friday"
// if(dayOfMonth === 13 && weekDay === "Friday"){
//     console.log("Bhag jaa ")
// }
// else{
//     console.log("So jaa")
// }

// let hands = ["rock","paper","scissor"]
// function hand(){
//     let random = Math.floor(Math.random()*3)
//     return hands[random]
// }
// console.log(hand())

// let fruit = ["apple","orange","apple","apple","orange"]
// let apple = document.getElementById("apple-shelf")
// let orange = document.getElementById("orange-shelf")
// function sortFruit(){
//     for(let i = 0; i< fruit.length;i++){
//         if(fruit[i]==="apple"){
//             apple.textContent += "apple "
//         }
//         else if ( fruit[i] === "orange")
//         {
//             orange.textContent += "orange "
//         }
//     }
// }


//  let getBox = document.getElementById("Open");
//  getBox.addEventListener("click",function(){
//     console.log("Hello There");
//  })
 

// const basePrice = 520;
// let discount = 120
// let shippingCost = 12
// let shippingTime = "5- 12 days"

// shippingCost = 15;
// shippingTime = "7-14 days"

// let fullPrice = base-discount + shippingCost
// console.log("Total cost : " + fullPrice + " It will arrive in " + shippingTime)


// let name = "james"
// let sender = "Vishu"
// const email = `Hey ${name} How is it going man !! ${sender}`
// console.log(email)


const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML += "<p>Thank you for buying!</p>"
}