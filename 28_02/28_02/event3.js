var suncicaJePospanaOsoba = function(event) {
    // document.querySelector("img").style.bottom = event.clientY;
    document.querySelector("img").style.left = event.clientX + "px";
    document.querySelector("img").style.top = event.clientY + "px";
}

document.querySelector('div').addEventListener('click', suncicaJePospanaOsoba);

var stopMoving = function() {
    document.querySelector('div').removeEventListener('click', suncicaJePospanaOsoba);
}
document.querySelector('button').addEventListener('click', stopMoving);