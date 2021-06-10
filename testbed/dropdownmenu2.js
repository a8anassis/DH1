function doRes() {
    let main = document.querySelector('.main');
    let menures = document.querySelector('.menu-res');
    let res = document.querySelector('.res');
    let s = window.getComputedStyle(main).getPropertyValue('display');
    
    if (s == "block") {
        main.style.display = "none";
        res.innerHTML = "CLOSE";
        menures.style.display = "block";
    } else {
        main.style.display = "block";
        res.innerHTML = "MENU"
        menures.style.display = "none";
    }
}

