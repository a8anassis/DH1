function toggleMenu() {
    let slider = document.querySelector('.slider');
    let advs = document.querySelector('.advantages');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    let menuToggle = document.querySelector('.menu-toggle');
    let menuToggleDisplayStatus = window.getComputedStyle(menuToggle).getPropertyValue('display');

    if (menuToggleDisplayStatus == "none") {
        menuToggle.style.display = "block";
        slider.style.display = "none";
        advs.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    } else {
        menuToggle.style.display = "none";
        slider.style.display = "block";
        advs.style.display = "flex";
        main.style.display = "block";
        footer.style.display = "flex";
    }
}