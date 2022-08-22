let size;
let cardsOption = ["img/parrot1.gif", "img/parrot2.gif", "img/parrot3.gif", "img/parrot4.gif", "img/parrot5.gif", "img/parrot6.gif", "img/parrot7.gif", "img/parrot8.gif", "img/parrot9.gif", "img/parrot10.gif", "img/parrot11.gif", "img/parrot12.gif", "img/parrot13.gif", "img/parrot14.gif",  "img/parrot15.gif", "img/parrot16.gif", "img/parrot17.gif", "img/parrot18.gif"];
let mixOption = cardsOption.sort(comparador);
let pairsNumber;
let selectedCards = [];

startGame();

function startGame() {
    while (true) {
        size = prompt("Com quantas cartas quer jogar? Insira um número par entre 4 e 14:");
        if (size < 4 || size > 14 || size % 2 == 1) {
            alert("Por favor, insira um número par entre 4 e 14");
        } 
        else {
            break;
        }
    }

    pairsNumber = size / 2;

    const cards = document.querySelector(".game");


    for (let i = 0; i < pairsNumber; i++) {
        selectedCards.push(mixOption[i]);
        selectedCards.push(mixOption[i]);
    }

    selectedCards = selectedCards.sort(comparador);

    for (let i = 0; i < size; i++) {
        let item = `
            <div class="card" onclick="flipCard(this)">
                <div class="front face">
                    <img src=${selectedCards[i]} alt="Parrot">
                </div>
                <div class="back face">
                    <img src="img/parrot.svg" alt="Parrot">                
                </div>
            </div>
        `;

        cards.innerHTML = cards.innerHTML + item; 
    }
} 

function flipCard(flip) {
    let back = flip.children[1];
    let front = flip.children[0];
    back.classList.toggle("flipCard2");
    front.classList.toggle("flipCard1");
}

function comparador() { 
    return Math.random() - 0.5; 
}
