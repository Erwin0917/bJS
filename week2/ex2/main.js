//(function(){
    
    var form = document.querySelector("form"),
        toValid = form.querySelectorAll("[data-error]");
    


function addErrorClass(field){
    
    field.classList.add("error");
}

function isNumer(field){
    
    
    if(field.value < 0 || field.value > 0 || field.value === "0"){ 
        return true;
       }else{
        return false;
       }
    
    
}

function isEmpty(field, numb){
   if(field.value.length < numb){
       return true;
   }else 
       return false;
    
}

function displayErrors(err){
    
    var ul = document.querySelector("ul.errorList");
    
    if(!ul){
        ul = document.createElement("ul");
        ul.classList.add("errorList");
    }
    
    ul.innerHTML = "";
    
    err.forEach(function(error) {
        
        var li = document.createElement("li");
        
        li.innerHTML = error;
        
        ul.appendChild(li);
        
    });
    
    form.appendChild(ul);
    
}

form.addEventListener("submit", function(e){
    
    
    
    var errors = [];
        
    
    
    for(var i = 0; i < toValid.length; i++){
        
        var field = toValid[i],
            isValid = false;
        
        field.classList.remove("error");
        
        if(field.name === "numberPlace"){
            if(!isNumer(field)){
                errors.push(field.dataset.error);
                addErrorClass(field);
            }   
        }
        if(field.type === "text" && field.name !== "numberPlace" ){
            if(isEmpty(field, 3)){
                errors.push(field.dataset.error); 
                addErrorClass(field);
            }
        }
        if(field.type === "textarea"){
            if(isEmpty(field, 10)){
                errors.push(field.dataset.error);
                addErrorClass(field);
            }
        }
        if(field.type === "email" ){
            if(field.value.indexOf("@") === -1){
                errors.push(field.dataset.error);
                addErrorClass(field);
                }
            }
        
        
        
        
    }

    
    
    if(errors.length){
        displayErrors(errors);
        e.preventDefault();
    } else {
        form.submit();
    }
    
    
    
    
}, false);


    
    
//})();