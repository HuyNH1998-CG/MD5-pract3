function isPrime(number: number): boolean {
    let prime = true;
    if (number < 2) {
        prime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i == 0){
                prime = false;
                break;
            }
        }
    }
    return prime;
}

let array = [1,5,9,2,6,15,19,35,51,53];
let sum = 0;
for(let number of array){
    if(isPrime(number)){
        sum+=number;
    }
}
console.log(`Total ${sum}`)

