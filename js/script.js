let burgerBtn = document.querySelectorAll(".burger");
let burgerItem = document.querySelector(".burger-item")
let navItem = document.querySelectorAll(".side-bar--item")
burgerBtn.forEach(element => {
    element.onclick = function() {
        window.scrollTo({ top: 0 });
        document.body.classList.toggle("side-bar");
        if (document.body.classList == "side-bar") {
        burgerItem.textContent = 'close';
        }
        else {
        burgerItem.textContent = 'menu';

        }
    }
});
navItem.forEach(element => {
    element.onclick = function() {
        document.body.classList.remove("side-bar")
    }
});
