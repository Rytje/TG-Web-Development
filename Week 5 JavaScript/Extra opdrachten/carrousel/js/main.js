let container;
let currentIndex = 1;
let nrOfPics;

container = document.getElementsByClassName("container")[0];
nrOfPics = document.getElementsByTagName("img").length;

console.log(container);
console.log(nrOfPics);

function next() {
    if (currentIndex >= 1 && currentIndex !== nrOfPics) {
        move(currentIndex++, 1);
        console.log("next");
    }
}

function previous() {
    if (currentIndex <= nrOfPics && currentIndex !== 1) {
        move(currentIndex--, -1);
        console.log("previous");
    }
}

function move(currentPosition, direction) {
    if (currentPosition === 1 && direction > 0) {
        // let distance = 800 * currentPosition * direction * -1 + "px";
        container.style.marginLeft = "-800px"
        container.style.transition = "margin-left 2s";
    } else if (currentPosition === 2 && direction > 0) {
        container.style.marginLeft = "-1600px"
        container.style.transition = "margin-left 2s";
    } else if (currentPosition === 2 && direction < 0) {
        container.style.marginLeft = "0px"
        container.style.transition = "margin-left 2s";
    } else if (currentPosition === 3 && direction < 0) {
        container.style.marginLeft = "-800px"
        container.style.transition = "margin-left 2s";
    }
}