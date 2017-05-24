///////////////////////////////////////////////
import Database from "./Database.js";



////////////////////////////////////////////////////////////
alert("dziala");
var db = new Database("db://localhost:3000"); // fikcyjny adres
 
db.on("connect", (url) => {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});
 
db.on("disconnect", (url) => {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});

db.connect();
 

setTimeout(function() {
    db.disconnect();
}, 3000);

    
