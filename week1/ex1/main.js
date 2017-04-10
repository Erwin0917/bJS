var productsAmount = 100,
    priceItem1 = 5,
    totalPrice = productsAmount * priceItem1,
    discount,
    dicountPrice;
    



if(productsAmount < 5){
    discount = 0;
}else if(productsAmount >= 5 && productsAmount <=20){
    discount = 5;
}else if(productsAmount >= 21 && productsAmount <=50){
    discount = 10;
}else if(productsAmount >= 51 && productsAmount <=100){
    discount = 15;
}else{
    discount = 20;
}
    
    dicountPrice = totalPrice - (totalPrice * (discount/100));




    console.log("Podstawowa cena produktu to " + totalPrice + "zł, " + "po obniżce to " + dicountPrice + "zł");

