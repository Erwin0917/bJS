//(function(){
   

   // ---- Animacja przycisku ----
    $(document).ready(function(){

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open'); // style animacji zaczerpniete z internetów
        $("nav").stop().animate({
            "width": "toggle"
        },400);
	});

});
 // ---- Animacja przycisku koniec ----







//})();