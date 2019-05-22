"use strict";

function criaTabuleiro(rand, n) { 
    let lin = []; 
    let col = n/2 - 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            lin[j] = 0;
            if((col === i && col === j) || (col === (i-1) && col === j) || (col === i && col === (j-1)) || (col === (i-1) && col === (j-1))) {
                lin[j] = 'J';
            } else {
                if((i === rand[4] && j === rand[0] && lin[j] === 0) || (i === rand[3] && j === rand[1] && lin[j] === 0) || (i === rand[2] && j === rand[3] && lin[j] === 0) || (i === rand[1] && j === rand[2] && lin[j] === 0) || (i === rand[0] && j === rand[4] && lin[j] === 0)){
                    lin[j] = 'P';
                }
            }
        }
        console.log(lin);
    }
}

function main() {

    $('#cabecalho p').append("Logged in @" + localStorage.getItem("username"));
    let rand = [];
    let random;
    let n = prompt('Quantas linhas de tabuleiro?', '8');
    for(let i = 0; i < 5; i++) {
        random = Math.floor((Math.random()* (n-1) + 1));
        while(rand.includes(random)) {
            random = Math.floor((Math.random()*(n-2)) + 1);
        }
        rand.push(random);
    }
    console.log(rand[0]);
    console.log(rand[1]);
    console.log(rand[2]);
    console.log(rand[3]);
    console.log(rand[4]);
    
    criaTabuleiro(rand, n);
}

document.addEventListener("DOMContentLoaded", function(event) {main()});