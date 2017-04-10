var numbers = [2, 3, 4, 2, 3, 2, 20];


function sum(arr){
    var sum = 0,
        arrLenght = arr.length;
    
    for(var i = 0; arrLenght > i; i++){
        sum += arr[i];
    }
        return sum;
}

