function getDate(){
    
    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        formatDate;
        
        if(month < 10){
            month = "0" + month;
        }
        formatDate =  (day < 10 ? "0" + day : day) + "." + month + "." + year + "." ; // day poprawiony po konsultacjach live.
     
    return formatDate;
}