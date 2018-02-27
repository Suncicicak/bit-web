var a = function() {
var node = document.getElementsByClassName("second")[0];
node.className = "first";
}

a();

var changeLi = function(){
    var li = document.getElementsByTagName('li');
    var i = 0;
    while (i < li.length) {
        li[i].className = "third";
        i++;
    }
}

changeLi();

var x = function () {
    var lists = document.getElementsByTagName('ul');
    var last_list = lists[lists.length-1];
    var li = last_list.getElementsByTagName('li')

    var i = 0;
    while (i < li.length) {
        li[i].className = "different";
        i++;
    }
}

x();