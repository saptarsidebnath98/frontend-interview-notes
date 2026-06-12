function outer (){
    let count = 0;
    return function inner(){
       return ++count;

    }
}

const a = outer();

console.log(a()) // returns 1
console.log(a()) // returns 2
console.log(a()) // returns 3