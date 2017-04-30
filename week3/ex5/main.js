//(function(){

function isSiteNumber(site){
    var code = new RegExp("\\?page=(\\d+)", "ig"),
        find = code.exec(site);
    
     if ( find ){
        return find[1];
    }
    return null;
}



function getPage(){

    var pageAdres = window.location.href,
        //afterPars = (isSiteNumber(pageAdres) >= 0) ? isSiteNumber(pageAdres) : null, po małych zmianach niepotrzebne
        afterPars = isSiteNumber(pageAdres);


       


   return console.log(afterPars);


}


getPage();

//})();