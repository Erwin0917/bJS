//(function(){
   
    var btn = $("button");



    function addClass(e){
        var that = $(this);

        if( that.is("#btn--grid") ){
            $(".grid").toggleClass("sel")
        }else if( that.is("#btn--grid-12") ){
            $(".grid-12").toggleClass("sel")
        }else if( that.is("#btn--grid-all") ){
            $(".grid, .grid-12").toggleClass("sel")
        }else if( that.is("#btn--href") ){
            $("nav a[href^='http']").toggleClass("sel")
        }else if( that.is("#btn--input") ){
            var inputs = $("input[type='radio'], input[type='checkbox']");

                inputs.parent().removeClass("sel");
                if(inputsChek = inputs.is(':checked') ){
                    inputs.filter(":checked").parent().toggleClass("sel");
                }      
        }else if( that.is("#btn--p") ){
            $(".text p").first().toggleClass("sel")
        }else if( that.is("#btn--pagin") ){
            $(".pagination-item").not("span").toggleClass("sel")
        }

    }


    btn.on("click", addClass);








//})();