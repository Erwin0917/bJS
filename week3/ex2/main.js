//(function(){
   


function Toggler(item){
    
    this.item = document.querySelector(item); // szukamy elementu i zapisujemy do this.item
    
    
    
}

Toggler.prototype.getElem = function(){ // zwracamy znaleziony element
    
    return this.item;     // -- nie wiem czy o to chodziło --
    
}

Toggler.prototype.show = function(){ // pokazujemy element jeśli był ukryty
    
    return this.item.style.display = "";
}

Toggler.prototype.hide = function(){ // ukrywamy element
    
    return this.item.style.display = "none";
}






var elem = new Toggler("#section");
var button = document.querySelector("#button");





button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);




//})();