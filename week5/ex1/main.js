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

    xhr.send(null); 


}


var url = "http://code.eduweb.pl/bootcamp/json/";

getJSON(url, function(data) {

    
    let ul = document.createElement("ul");
    for(let val of data){
        
        let li = document.createElement("li");

        let {
            name,
            username,
            email,
            address:{
                geo: [geo1, geo2]
            },
            website,
            company:{
                name: companyName
            }

        } = val || {};

        let geoLoc = `<a href=http://bing.com/maps/default.aspx?cp=${geo1}~${geo2}>Pokaż na mapie</a>`;
        let person = `Imię: ${name}, Email: <a href="mailto:${email}">${email}</a>, Strona: ${website}, Firma: ${companyName}, Lokalizacja: ${geoLoc}  `;

        li.innerHTML = person;
        ul.appendChild(li);

       

    }
    
    document.querySelector(".output").appendChild(ul);



    
}, function(err) {

    console.log(err);
});


//})();