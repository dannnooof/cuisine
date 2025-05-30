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




document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const images = document.querySelectorAll("img");

    // Функция для скрытия загрузочного экрана
    function hidePreloader() {
        preloader.style.display = "none";
        content.style.display = "block";
    }

    // Если изображений нет, сразу показываем контент
    if (!images.length) return hidePreloader();

    let loaded = 0;

    // Функция для проверки состояния изображения
    function checkImage(img) {
        if (img.complete) {
            // Изображение уже загружено (например, из кэша)
            return true;
        }
        return false;
    }

    // Добавляем обработчики событий для каждого изображения
    images.forEach((img) => {
        if (checkImage(img)) {
            // Если изображение уже загружено
            loaded++;
        } else {
            // Добавляем обработчики событий
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === images.length) hidePreloader();
            };
        }
    });

    // Если все изображения уже загружены (например, из кэша)
    if (loaded === images.length) hidePreloader();
});
