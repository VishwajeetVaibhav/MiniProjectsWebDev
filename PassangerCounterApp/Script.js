let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");



function increment(){
    count = count+1;
    countEl.innerText = count;
}

// document.getElementById("count-el").innerText = count;

function save(){
    let countStr = count + " - ";
    saveEl.textContent+=countStr;  
    count = 0; 
    countEl.textContent = 0  
    
}




