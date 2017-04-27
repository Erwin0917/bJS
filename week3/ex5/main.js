//(function(){

//Accept: application/json

function getJSON(url, successFn, errorFn) {
    var xhr = new XMLHttpRequest(),
        data = null;

    xhr.open("GET", url, true);



    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
            data = JSON.parse(xhr.response);
            successFn(data);
        }

    };

    xhr.onabort = function() { errorFn(xhr.status); };
    xhr.onerror = function() {
        errorFn(xhr.status)
    };


    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(null); //wysyłamy zapytanie - po wyslaniu nie mozemy juz nic z obiektem zrobic


}


var url = "http://code.eduweb.pl/bootcamp/users/";

getJSON(url, function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});


//})();