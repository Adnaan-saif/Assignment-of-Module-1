function getRandomArray() {
    const randomNumbers = [];
    for (let i = 0; i < 9; i++){
    const randomNum = Math.floor(Math.random() * 90) + 10;
    randomNumbers.push(randomNum);
    }
    return randomNumbers;
}


let Array = getRandomArray()
function getEvenNumbers (Array) {
    return Array.filter((num)=>num % 2 === 0);
    
}
let evenNumbers = getEvenNumbers(Array);
console.log(evenNumbers);