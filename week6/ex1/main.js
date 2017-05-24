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


let url = "http://code.eduweb.pl/bootcamp/json/";




let output = document.querySelector(".output");
getJSON(url, function(data) {

    const personAll = new WeakMap();


    window.personAll = personAll; // do sprawdzania co jest w personAll w konsoli

    for (let person of data) {
        let li = document.createElement("li");
        let { name, email } = person;
        li.innerHTML = name;
        output.appendChild(li);


        personAll.set(li, email);
        li.addEventListener("click", function(e) {
            if (li.innerHTML === name) {
                li.innerHTML = `${name} <a href=mailto:${email}>${email}</a>`;
            } else li.innerHTML = name;


        }, false);
    }







}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});


//})();