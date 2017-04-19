//(function(){
    
   
    var ul = document.querySelector(".ul"),
        info = document.querySelector(".finish"),
        btn = document.querySelector(".btn");
        
    



    function show(push){
        //funkcja wywołana po zakończeniu odliczania
        var elem = document.createElement("p"),
            text = "Funkcja zakończona",
            toPush = (elem.innerHTML = text);
        
        return push.appendChild(elem);
            
        
    }
    

    function interval(fn, count){
        //funkcja wywołana po naćiśnieciu przycisku odliczająca do 0
        var count = count,
            push = push,
            listElem = document.createElement("li");
        
        window.setTimeout(function(){
                          // odliczanie do 0 i dodwanie Li do listy 
                            
                          if(count > 0){
                                count--;
                              listElem.innerHTML = "Pozostało do kończa odliczania " + count + " sekund."
                              ul.appendChild(listElem);
                              interval(fn, count);
                          }else{
                              fn();
                          }
                            
                          }, 1000);
        
        
    }




    btn.addEventListener("click", function(){
        ul.innerHTML = ""; // resetowanie ul
        info.innerHTML = ""; // resetowanie div info 
        interval(function(){
            show(info)
        }, 10)
        },false);

    
//})();