//(function(){

// Zakładamy, że taki obiekt byłby dodany
// gdzieś w kodzie HTML w tagu <script>
// przez system CMS generujący widok strony


function formatPrice(currency) {

    let rate = window.currencies[currency];




    return function(strings, ...values){

            let output = "";


            strings.forEach(function(string, i){
                output += string;

                let val = values[i];



                if( typeof val === "number" ){
                        val = val / rate;
                        output += `${val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} ${currency}`;

                }
                if( val !== undefined && typeof val !== "number" ){
                        output += val;
                    }
                });


            return output;

        }
};



window.currencies = {
    "USD": 3.8078,
    "EUR": 4.1794,
    "GBP": 4.9456
};

let product = {
    name: "Pendrive 16GB",
    price: 23,
    quantity: 4
};

let { name: pName, price: pPrice, quantity: pQuantity } = product;




let info = formatPrice("GBP")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

console.log(info);
// Kupiłeś produkt 'Pendrive 16GB' w cenie 4.65 GBP za sztukę. Łączna wartość zamówienia to 18.60 GBP.

//})();