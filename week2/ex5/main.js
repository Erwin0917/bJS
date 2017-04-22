(function() {

    function debounce(fn, time) {
        // docelowo powinna być wywoływana
        // funkcja fn w ten sposób fn()

        var wait = false;
        
        // część kodu tutaj

        return function() {
            // pozostały kod tutaj
            if( !wait ){
                wait = true;
                
                
                clearTimeout(timeout);  
                var timeout = setTimeout(function(){
                    wait = false;
                    fn.apply(this, arguments);
                    
                }, time || 300)
            }
            
        };
    }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 300);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 500);

    window.addEventListener("resize", handleResize, false);

})();