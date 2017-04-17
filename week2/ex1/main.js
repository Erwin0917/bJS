(function(){
    
    var hidden = document.querySelector(".mainSuperSecretText"),
        btn = document.querySelector("button[name='btnMain']");
    
    
    
    function showHidden(){
        
        if(hidden){ // if HIDDEN elem exist do -> 
                var elemDisStyle = hidden.style.display;

                if( elemDisStyle === "none"){ // Show Elem
                    
                    hidden.style.display = "inline-block";
                    btn.textContent = "Ukryj tajne dane, zanim ONI Cię znajdą";
                    
                }else{ // Hide elem
                    
                    hidden.style.display = "none";
                    btn.textContent = "Pokaż treść";
                }
            
        }else{
            console.log("Super secret text not exist");
        }
       
    }
    
    
    
    btn.addEventListener("click", showHidden, false);
    
})();