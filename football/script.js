var body = $('body');
var container = $('.container');
var player = $('.player');
var btn = $('.btn');

function movePlayer(event) {
    var ourX = event.clientX;
    var ourY = event.clientY;
    

    player.css({
        'top': ourY + 'px',
        'left': ourX + 'px'
    })

    console.log(event.clientX, event.clientY);
}
  
$('.field').on('click', movePlayer);

btn.on('click', function() {
    $('.field').off('click', movePlayer)
});