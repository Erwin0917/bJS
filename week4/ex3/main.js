//(function(){
   

   // ---- Wstawianie elementu ----
    $(document).ready(function(){

	$("button").on("click", function(){
        var inputVal = $("input").val();
        
        if($.trim(inputVal) != ""){
             var li = $("<li></li>", {
                text: inputVal
            });
            $("#output").append(li);
        }else throw new Error("Pole input jest puste");
 

    });


});
 // ---- Wstawienia elementu koniec ----







//})();