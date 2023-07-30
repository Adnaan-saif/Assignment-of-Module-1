function discountCalculator(input) {
let discount;
let discountedAmount;
if (input<50) {
    discount = 0;   
} else if (input>=50 && input<100){
    discount = (input*0.05);
} else if (input>=100 && input<200){
    discount = (input*0.10);
} else {
    discount = (input*0.20);
  }
  discountedAmount = (input-discount);
  return {discountedAmount,input,discount};
}
console.log(discountCalculator(Math.floor(Math.random() * 1000) + 1));