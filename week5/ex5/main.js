const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];


function preloadImages(urls){

    let count = 0;

    let p = new Promise(function(resolve, reject){


        for(let url of urls){

            let img = document.createElement("img");

            img.onload = function(){
                if(++count === urls.length){
                    resolve(urls);
                }
            }

            img.onerror - function(){

                reject( new Error(" Błąd ładowania ") );
            }

            img.src =url;

        }
        

    });

    return p;
}


const btn = document.querySelector("#btn"),
    output = document.querySelector("#images");

btn.addEventListener("click", function(){

    preloadImages(urls)
        .then(function(urls) {
            console.log("Obrazy wczytane.");


            let docFragment = document.createDocumentFragment();

            for(let url of urls){
                
                let im = document.createElement("img");

                im.src = url;

                docFragment.appendChild(im);
            }

            return docFragment;
        })
        .then(docFragment => output.appendChild(docFragment) )
        
        
        .catch( err => console.log(err.message));


},false);

