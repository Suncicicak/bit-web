// function sendRequest(ipAddress) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", "http://freegeoip.net/xml/4.2.2.2", true);
    
//     xmlhttp.onreadystatechange = function(event){
//         // console.log(response);
        
//         var xmlDoc = event.target.responseXML;
//         var from = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0];
//         // console.log(xmlDoc);
//         console.log(from);
//     }

//     xmlhttp.send();
// }

function sendRequestJSON(ipAddress){
    var request = new XMLHttpRequest();
    request.open("GET", "http://freegeoip.net/json/4.2.2.2", true);
    
    request.onload = function(event){
        if (request.status >= 200 && request.status  <= 400) {
            console.log(request.responseText);
            var data = JSON.parse(request.responseText);
            console.log(data);
        }
    }

    request.send();
}

// sendRequest();
sendRequestJSON();