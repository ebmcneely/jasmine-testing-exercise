window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      calculateMonthlyPayment();
      // update();
    });
  }
});

function setupIntialValues() {
  const initLoanAmt = 1000;
  const initTerm = 10;
  const initRate = 5;

  const prePopAmt = document.getElementById('loan-amount');
  prePopAmt.value = initLoanAmt;
  const prePopTerm = document.getElementById('loan-years');
  prePopTerm.value = initTerm;
  const prePopRate = document.getElementById('loan-rate');
  prePopRate.value = initRate;
}

function calculateMonthlyPayment() {
  const p = (document.getElementById("loan-amount").value);
  const n = (document.getElementById("loan-years").value);
  const i = (document.getElementById("loan-rate").value);

  const monthlyPmt = ((p * ((i/100)/12)) / (1 - Math.pow(1 + ((i/100)/12), -n))).toFixed(2);

  console.log(monthlyPmt);
}

