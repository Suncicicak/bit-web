
    
function collectData() {
    var s;
    var x = document.getElementById("input").value;
    if(x !== "") {
    s = "<p><span>" + x + "</span></p><br>";
    document.getElementById("div").innerHTML =  document.getElementById("div").innerHTML + s;
    }
    document.getElementById('input').value = "";
};
document.getElementById("input").onkeyup = function(event){
if (event.keyCode == 13) {
    collectData();
}
};
document.getElementById("button").onclick = function(){
    collectData()
};

