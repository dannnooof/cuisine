function openNav3() {
    document.getElementById("myNav3").style.height = "100%";
}

function closeNav3() {
    document.getElementById("myNav3").style.height = "0%";
}
function flipCard3() {
    const cardInner = document.querySelector('.card-inner3');
    cardInner.classList.toggle('flipped3');
}