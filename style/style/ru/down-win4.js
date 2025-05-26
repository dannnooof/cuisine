function openNav4() {
    document.getElementById("myNav4").style.height = "100%";
}

function closeNav4() {
    document.getElementById("myNav4").style.height = "0%";
}

function flipCard4() {
    const cardInner = document.querySelector('.card-inner4');
    cardInner.classList.toggle('flipped4');
}