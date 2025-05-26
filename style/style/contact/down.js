function myFunction() {
    document.getElementById("myDropdowncontact").classList.toggle("show");
}


window.onclick = function (e) {
    if (!e.target.matches('.dropbtncontact')) {
        var myDropdowncontact = document.getElementById("myDropdowncontact");
        if (myDropdowncontact.classList.contains('show')) {
            myDropdowncontact.classList.remove('show');
        }
    }
}




