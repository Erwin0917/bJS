

class Lotek{

    constructor(){  
        this.numbers = this.getNumbers();
    }

    getNumbers(){
        
            let random,
                numbers = [];

            for(let i = 0; i < 6; i++){

                random = this.getRandom(1, 49);

                while(numbers.indexOf(random) !== -1){
                    random = this.getRandom(1, 49);
                    
                }

                numbers.push(random);

            }
            return numbers;
            
    }

    getRandom(min, max){

        return Math.round(Math.random() * (max - min ) + min );

    }


    


    checkNumbers(...args){

        let hits = [];

        for(let number of args){

            if( this.numbers.includes(number) ){
                hits.push(number);
            }
            
        }

        return {
            numbers: hits,
            count: hits.length

        }

    }


    *[Symbol.iterator](){
        yield *this.numbers;
    }




}


/////////////////////////////////////////////////////////

let shot = new Lotek();

let {numbers: hits, count} = shot.checkNumbers(2, 13, 15, 22, 34, 40);
// zwraca np. { numbers: [13, 22], count: 2 }
console.log(hits, count);

// tablica ze wszystkimi wylosowanymi liczbami
let numbers = [...shot];
console.log(numbers);

// wyświetla kolejno wylosowane liczby
for(let number of shot) {
    console.log(number);
}
