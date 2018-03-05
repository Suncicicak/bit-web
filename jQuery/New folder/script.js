$(function () {
    var unicorns = ['https://img00.deviantart.net/8093/i/2004/137/6/e/black_unicorn.jpg', 'http://images2.fanpop.com/images/photos/5700000/Black-Unicorn-fantasy-animals-5768814-430-343.jpg', 'https://3.bp.blogspot.com/-B5T0SIV26wo/Vr7e-tQOzYI/AAAAAAAAKcg/ehitJzwaviI/s1600/288281.jpg']

    var div = $('<div><h1>Image gallery</h1></div>');
    $('body').append(div);

    for (var i = 0; i < unicorns.length; i++) {

        // napravi jedan img element slika
        // postavi mu attr src na unicorns[i]
        // dodaj ga na stranu 
        $(div).append('<img src="' + unicorns[i] + '">').css({
            "float": "left"
        })
    }

    $('img').each(function (index, element) {
        var rand = Math.random() * 500;
        $(element).css('width', rand + 'px');
    })


});