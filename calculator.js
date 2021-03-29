// version 1

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      getCurrentUIValues();
      update();
    });
  }
});

function getCurrentUIValues() {  
  const amtInput = (document.getElementById("loan-amount").value);
  const termInput = (document.getElementById("loan-years").value);
  const rateInput = (document.getElementById("loan-rate").value);
}

// Get the inputs from the DOM. ***DONE
// Put some default values in the inputs ***DONE
// Call a function to calculate the current monthly payment
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

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
