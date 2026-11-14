const loanData =  {
    amount: 100000,
    apr: 5,
    years: 30,
    zipcode: null
};

loanData.apr = 4.5;
loanData["currency"] = "BRL";
console.log(loanData);

console.log(typeof loanData.amount);
console.log(typeof loanData.currency);
console.log(typeof loanData.zipcode);
console.log(typeof loanData.nonExistentProperty);

console.log("100000" == loanData.amount);
console.log("100000" === loanData.amount);

const origin1 = { x: 0, y: 0};
const origin2 = { x: 0, y: 0};

console.log(origin1 === origin2);
console.log(origin1.x === origin2.x);