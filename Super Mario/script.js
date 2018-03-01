var moving = document.querySelector('.movigBack');
var div = document.querySelector('div');

function movBackground() {
div.classList.toggle('movigBack'); 
}

// document.onkeypress = function(event) {
   
//         console.log('bori je car')
//         setInterval(movBackground, 1000);
    
// }
var b;
document.addEventListener("keydown", function(event) {
    console.log("jadsfjk");
    
   
      b =  setInterval(movBackground, 30);

});

document.removeEventListener('onkeyup', function(event) {
        console.log("dfakljdfa")
})