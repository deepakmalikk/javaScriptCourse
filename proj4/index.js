let cards = document.querySelectorAll(".card")

var isFlipped = false;
var firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flip));
function flip() {
    

    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        checkIt();
    }
}

let checkIt = () => {

    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }
}

let success = () => {

    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

let fail = () => {

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

let reset = () => {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


let shuffle = () => {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    });
};

window.onload=(()=>{
    shuffle()
})