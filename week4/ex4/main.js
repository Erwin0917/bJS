//(function(){
   

   $(document).ready(function(){
        var btn = $("button"),
            source = $("#entry-template").html(),
            template = Handlebars.compile(source);



        btn.on("click", function(){


            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
                $(data).each(function(i, person){
                        
                        var html = template(person);
                        $("#output").append(html);
                    
                });

            });
            $(document).ajaxError(function(e){
                console.log("błąd" + e);
            });

        });




   });







//})();