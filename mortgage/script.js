let amount = document.getElementById("amount");
let interest = document.getElementById("interest");
let term = document.getElementById("term");
let monthly = document.getElementById("monthly");
let total = document.getElementById("total");
const start = document.getElementById("start");
const calculated = document.getElementById("calculated");
function calculate() {
  let amountValue = parseFloat(amount.value);
  let interestValue = parseFloat(interest.value) / 100;
  let termValue = parseInt(term.value);

  let type = document.querySelector('input[name="choice"]:checked').value;

  if (isNaN(amountValue) || isNaN(interestValue) || isNaN(termValue) || amountValue <= 0 || interestValue <= 0 || termValue <= 0) {
    alert("Please enter valid numbers for all fields.");
    return;
  }
 document.querySelectorAll("form-group").forEach(el=>
  el.classList.remove("selected")

 )
  if (type === "repayment") {    let monthlyInterestRate = interestValue / 12;
    let numberOfPayments = termValue * 12;
    let monthlyPayment = amountValue * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    let totalRepayment = monthlyPayment * numberOfPayments;
    let totalInterest = totalRepayment - amountValue;

    monthly.innerText = monthlyPayment.toFixed(2);
    total.innerText = totalInterest.toFixed(2);
  } else if (type === "interest") {
    let monthlyInterestPayment = (amountValue * interestValue) / 12;
    let totalInterest = monthlyInterestPayment * termValue * 12;
    monthly.innerText = monthlyInterestPayment.toFixed(2);
    total.innerText = totalInterest.toFixed(2);
  }
  
  calculated.classList.remove("d-none");
  start.classList.add("d-none");
}

const clear = () => {
  amount.value = "";
  interest.value = "";
  term.value = "";
  monthly.innerText = "";
  total.innerText = "";
  calculated.classList.add("d-none");
  start.classList.remove("d-none");
};

document.getElementById("clear").addEventListener("click", clear);
