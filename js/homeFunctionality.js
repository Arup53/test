const amount = document.getElementById("amount");
const pinNumber = document.getElementById("pinNumber");
const balance = document.getElementById("Balance");

// addMoneySubmit.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(pinNumberInput);
// });

document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (pinNumber.value === "5") {
      console.log(amount.value, balance.innerText);
      let ctotal = parseFloat(amount.value) + parseFloat(balance.innerText);
      console.log(ctotal);
      balance.innerText = ctotal;
    } else {
      alert("wrong password");
    }
  });
