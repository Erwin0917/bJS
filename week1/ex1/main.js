var productsAmount = 100,
    priceItem1 = 5,
    totalPrice = productsAmount * priceItem1,
    discount,
    dicountPrice;
    



if(productsAmount < 5){
    discount = 0; // brak zniżki
}else if(productsAmount >= 5 && productsAmount <=20){
    discount = 5; // 5% zniżki
}else if(productsAmount >= 21 && productsAmount <=50){
    discount = 10; // 10% zniżki
}else if(productsAmount >= 51 && productsAmount <=100){
    discount = 15; // 15% zniżki
}else{
    discount = 20; // 20% zniżki
}
    
    dicountPrice = totalPrice - (totalPrice * (discount/100)); // cena po promocji




    console.log("Podstawowa cena produktu to " + totalPrice + "zł, " + "po obniżce to " + dicountPrice + "zł");

