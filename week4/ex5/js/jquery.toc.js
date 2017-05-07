
(function($, win, doc, undefined){

    function getScrollTo(elem){ // obliczanie wysokosci od gory naglowkow
        var offset = elem.offset();
            scrollTo = offset.top;
            //console.log("Ten z getScroll:");
            //console.log(offset);
        return scrollTo;
    }


    

    $.fn.toc = function(elem){
        
        if(!elem){
            var elem = "h2";
        }

        var that = $(this),
            amount = that.lenght,
            tocElem = that.find(elem),
            output = $(".container")
            tocWrap = $("<div>").addClass("toc");
            ul = $("<ul>");

            tocWrap.prepend($("<h2>").text("Spis teści"));
            tocWrap.append(ul);
            
        var count = "1",
            scrollElem = [];
            tocElem.each(function(){ //tworzenie spisu
                
                var elemText =  count +". "+($(this).text()); // dodawanie nr rozdziału

                ul.append($("<li>")
                  .append($("<a href='#'>")
                  .append(elemText
                  ))); //dodawanie do ul

                scrollElem = $(scrollElem).add(getScrollTo($(this))); // dodawanie offset.top do tablicy
                count++;


                
            })

            ul.find("li").on("click", function(e){
                
                    e.preventDefault();

                var that = $(this),
                    index = that.index();
   
                    console.log(tocWrap.height());
                    $('html, body')
                        .animate(
                        {scrollTop: scrollElem[index] + tocWrap.outerHeight()}
                        , 1000);

                console.log(scrollElem[index]);

            })
            
            
            



            output.prepend(tocWrap); // dodanie listy na strone
            
        
        
        return this;
    };


    
    //scrol do wysokosci na klikniecie

    //sprawdzanie czy wszystkie elementy zostały dodane




}(jQuery, window. document));

