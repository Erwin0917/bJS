function getDate(){
    
    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        formatDate;
        
        if(month < 11){
            month = "0" + month;
        }
        formatDate =  day + "." + month + "." + year + "." ; 
     
    return formatDate;
}