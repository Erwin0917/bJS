//(function(){
   


if( !(String.prototype.repeatt) ){
    
    String.prototype.repeatt = function(rep){
        
        var str = this.toString(),
            arr = [];
            
        
        
        for(var i = 0; i < rep; i++){
            arr.push(str);
            
        }
        
        // return console.log( arr.toString() ); 
        return console.log( arr.join(" ").toString() );
        
    }
    
    
}


"Ełgeniusz".repeatt(4);






//})();