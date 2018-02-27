
function selectElement() {
    var ourLi = document.getElementsByClassName("active")[0];
    ourLi.className = "";
    
    ourLi.parentNode.parentNode.previousElementSibling.children[0].children[0].className = "active";
}

selectElement();
// var changeLi = function(){
//     var li = document.getElementsByTagName('li');
//     var i = 0;
//     while (i < li.length) {
//         li[i].className = "third";
//         i++;
//     }
// }

// changeLi();

// var x = function () {
//     var lists = document.getElementsByTagName('ul');
//     var last_list = lists[lists.length-1];
//     var li = last_list.getElementsByTagName('li')

//     var i = 0;
//     while (i < li.length) {
//         li[i].className = "different";
//         i++;
//     }
// }

// x();