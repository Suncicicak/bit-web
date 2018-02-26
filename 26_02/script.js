(function () {
    var browserInfo = function () {
        return "Navigator is: " + navigator.platform + '\n' + "Our browser version is: " + navigator.appVersion + '\n' + "The company that create our browser is: " + navigator.vendor;
    }
    var isBrowserOnline = function () {
        if (navigator.onLine == true) {
            return "online"
        } else {
            return "offline"
        }

    }
    var browsersDimension = function () {
        return "Our browser width is: " + screen.width + ", and height is: " + screen.height + "\n max possible height is:" + screen.availHeight;
    }

    var locationInfo = function () {
        return 'URL address is: ' + location.href + '\n domain name is: ' + location.host + '\n used protocol is: ' + location.protocol + 'parameter is:' + location.href;
    }
    var locationReload = function () {
        return location.reload();

    }
    var setLocation = function () {

        return location.href = "https://www.google.rs";
    }
    var storage = sessionStorage;
    var storage2 = localStorage;

    var save_data_in_session = function (key,value) {
        storage.setItem(key,value);
    }

    var save_data_in_local = function (key,value) {
        storage2.setItem(key,value);
    }

    var get_data = function (key) {
        return storage2.getItem('tihomir');
        
    }
    // save_data_in_session("tihomir", 10);
    save_data_in_local("stevan", 22);

    // console.log(browserInfo());
    // console.log(isBrowserOnline());
    // console.log(browsersDimension());
    // console.log(locationInfo());
    // console.log(locationReload());
    // console.log(setLocation());

    console.log(get_data());
    
})();