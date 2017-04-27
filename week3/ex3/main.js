//(function(){

// UNSENT = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LEADING = 3
// DONE = 4



function fecz(url, successFn, errorFn) { // funkcja fecz przejmuje adres url, funkcje1 ktora wykona sie po udanym polaczeniu oraz funckje 2 ktora wykona sie gdy bedzie blad
    var xhr = new XMLHttpRequest(); //definiujemy nowy obiekt XMLHttpR

    xhr.open("GET", url, true); // otwieramy połączenie metodą GET, z argumentem URL, asynchronicznie (true)

    //xhr.onreadystatechange = checkConnection();

    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
            successFn(xhr.response);
        }

    };

    xhr.onabort = function() { errorFn(xhr.status); }; // który zapis closure'a jest lepszy, ten tutaj czy poniżej.
    xhr.onerror = function() {
        errorFn(xhr.status);
    };



    xhr.send(null); //wysyłamy zapytanie - po wyslaniu nie mozemy juz nic z obiektem zrobic


}


var url = "http://code.eduweb.pl/bootcamp/users/";

fecz(url, function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});


//})();