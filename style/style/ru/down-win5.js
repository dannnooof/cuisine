function openNav5() {
    document.getElementById("myNav5").style.height = "100%";
}

function closeNav5() {
    document.getElementById("myNav5").style.height = "0%";
}
function flipCard5() {
    const cardInner = document.querySelector('.card-inner5');
    cardInner.classList.toggle('flipped5');
}