const TaxRate = 0.2;
const SpendingTreshold = 400;

let BankBalance = Number(prompt("What is your current bank balance"));
let AmountLeft = BankBalance;
let PhonePrice = Number(prompt("What is the price of the phone"));
let AccessoryPrice = Number(prompt("What is the price of accessory"));
let TotalAmount = 0;
let TotalSetPrice = PhonePrice + AccessoryPrice;
let canIHaveIt = TotalSetPrice > SpendingTreshold;

function calculateTax(TotalSetPrice) {
  return TotalSetPrice * TaxRate;
}

function updateAmountLeft() {
  AmountLeft = AmountLeft - TotalSetPrice;
}

function roundedValue(value) {
  return value.toFixed(2);
}

while (AmountLeft - TotalSetPrice > 0) {
  if (canIHaveIt) {
    console.log(`You can't afford it!`);
    break;
  }
  TotalAmount++;
  updateAmountLeft();
}

if (!canIHaveIt) {
  console.log(
    `Your total number of sets is ${TotalAmount}, worth $${roundedValue(
      BankBalance - AmountLeft
    )}, and you will have $${roundedValue(AmountLeft)} left on your account`
  );
}
