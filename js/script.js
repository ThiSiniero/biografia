function bigImg(x) {
    x.style.width = "35em";
}
  
function normalImg(x) {
    if(window.screen.availWidth < 500) {
        x.style.width = "80%";
        return;
    }
    x.style.width = "25%";
}

let inicialImg = document.querySelector(".home");
inicialImg.style.height = `${window.screen.availHeight}px`;