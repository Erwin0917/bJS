const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];
const btn = document.querySelector("#btn"),
    outputContainer = document.querySelector("#images");


async function preloadImages(urls) {

    let count = 0;

    let p = new Promise(function(resolve, reject) {


        for (let url of urls) {

            let img = document.createElement("img");

            img.onload = function() {
                if (++count === urls.length) {
                    resolve(urls);
                }
            }

            img.onerror = function() {

                reject(new Error(" Błąd ładowania "));
            }

            img.src = url;

        }


    });

    return p;
}


function createOutput(data) {
    console.log("Obrazy wczytane.");


    let docFragment = document.createDocumentFragment();

    for (let url of data) {

        let im = document.createElement("img");

        im.src = url;

        docFragment.appendChild(im);
    }
    return docFragment;
}

async function getData(fn, output) {
    let data,
        docFrag;


    try {
        data = await fn;
        docFrag = await createOutput(data);
        output.appendChild(docFrag);

    } catch (e) {
        console.log(e.message);
    }


}





btn.addEventListener("click", function() {

    getData(preloadImages(urls), outputContainer);




}, false);