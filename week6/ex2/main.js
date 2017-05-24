Array.myFrom = function(elem, fn, ts) {

    
    var elemArr = [],
        length = elem.length;

    for(var i = 0; i < length; i++ ){
        elemArr.push(elem[i])

    };

    
    

    if(elem !== undefined && fn === undefined){
        return elemArr;
    }else if(typeof(fn) === "function") {
        
        var elemArr = elemArr.map(fn, ts);

        
        return elemArr;

    }

    
};







/////////////////////////////////////////////

var lis = document.querySelectorAll("ul li");

var lisArr = Array.myFrom(lis);

console.log(lisArr);

console.log(Array.isArray(lisArr)); // true

var lisTexts = Array.myFrom(lis, function(li) {
    return li.textContent;
});

console.log(lisTexts);
// lisTexts powinna być tablicą z tekstami wszystkich <li>