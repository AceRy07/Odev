function numberAdding(){
    console.log("Working");
}

function numberAdding(n1,n2){
    let result = n1 + n2;
    console.log(n1,n2,result);
}

numberAdding(5,10);


// Advenced Fonksiyon Örneği

function numberAdding(...numbers){
    let result = 0;
    for(let index of numbers){
        result += index;
    }
    console.log(numbers,result);
}

numberAdding(1,2,3,4,5);