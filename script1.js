const TaxRate = 0.3;
const PhonePrice = 39.99;
const AccessoryPrice = 12.99;
const SpendingTreshold = 60;

let BankBalance = prompt("Gimme cash");
let TotalAmount = 0;

function calculateTax(TotalAmount) {
  return TotalAmount * TaxRate;
}

function exactAmount(TotalAmount) {
  return TotalAmount.toFixed(2);
}

while (TotalAmount < BankBalance) {
  TotalAmount = TotalAmount + PhonePrice;
  if (TotalAmount < SpendingTreshold) {
    TotalAmount = TotalAmount + AccessoryPrice;
  }
}

TotalAmount = TotalAmount + calculateTax(TotalAmount);

console.log("Your purchase is: " + exactAmount(TotalAmount));

if (TotalAmount > BankBalance) {
  console.log("THAT IS TOO EXPENSIVE");
}
