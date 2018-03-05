$(function(){
    $("li:first").addClass("a");
    $("ul").addClass("b");
    $('li.active').addClass('c');
    var length = $("li").length;
    var middle = (length-1)/2;
    $('li:eq(' + middle + ')').addClass('d');
});

