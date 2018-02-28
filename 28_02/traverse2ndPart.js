// var cat = document.querySelector("div img").style.border = "2px solid blue";

// var catWithBorder = document.querySelector('img').getAttribute('border');

// catWithBorder = "none";


// function x() {
//     var text = document.querySelector("ul li").textContent;
//     alert(text);
// };

// x();

// function y(a) {
//     var text = document.querySelector("ul").lastElementChild;

//     text.textContent = a;
// }

// function createHTMLelements() {
//     var newUl = document.createElement('ul');
//     var newLi = document.createElement('li');
//     var newText = document.createTextNode('suncicu sanjam svaku noc');
//     var body = document.querySelector('body');
//     body.appendChild.newUl;
//     newUl.appendChild(newLi);
//     newLi.appendChild(newText);
// }


var createDropdown = function (array, n) {
    var i = 0;
    var s = "<select>\n";
    while (i < array.length) {
        s = s + "<option>" + array[i].toString() + "</option>\n"
        i++;
    }
    s += "</select>"


    var divs = document.querySelectorAll("div");

    divs[n].innerHTML = s;

}
// createDropdown(["edz", "dzoni kick", "nole seksoman"], 1);

// createDropdown(["Sundjer Bob", "Patrik", "Lignjoslav"], 0);

var a = function (array) {
    var i = 0;
    while (i < array.length) {
        var option = document.createElement('option');
        var textOpt = document.createTextNode(array[i].toString());
        option.appendChild(textOpt);
        document.querySelector('select').appendChild(option);
        i++;
    }
}
// a(["sdlkjsdlk", "dsfkjhfdjs", "djksdfkj"])

var form = function () {
    var input = document.querySelectorAll('input');
    var form;
    for (var i = 0; i < input.length; i++) {
        if (input[i].value == "" && input[i].hasAttribute("required")) {
            input[i].classList.add("third");
        }
    }
}


document.querySelector("button").addEventListener("click", form)