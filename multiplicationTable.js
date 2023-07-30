function multiplicationTable (number, tableLength) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= tableLength; i++){
        const result = number * i;        
        console.log(`${number} x ${i} = ${result}`);
    }
}
multiplicationTable(Math.floor(Math.random() * 9) + 1, 10);