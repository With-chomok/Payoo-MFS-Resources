const validPin = 1234;
const validNum = 12345678910;

// function get input number 
function getInputvalue(id){
  const inputFieldValue = parseInt(document.getElementById(id).value)
  return inputFieldValue;
}




document.getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = getInputvalue('bank-account');
    const addAmount = getInputvalue("add-amount");
    const addPin = getInputvalue("add-pin");
    // console.log(bank, accountNumber, addAmount, addPin);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Invalid Account Number");
      return;
    }
    if (addPin !== validPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totalBalance = addAmount + availableBalance;
    document.getElementById("available-balance").innerText = totalBalance;
  });

// cashout event check velidity pin and number section

document
  .getElementById("cashout-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const agentNumber = document.getElementById("Agent-Number").innerText;
    const withdrawPin = getInputvalue("withdraw-pin");
    const withdrawAmount = getInputvalue("cashout-amount");
   if (agentNumber.length < 11 && agentNumber.length !== validNum) {
      alert("Invalid Account Number");
      return;
    }
    if (withdrawPin !== validPin) {
      alert("Invalid Pin Number");
      return;
    }
    
    const newavailableBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = newavailableBalance;

  });

// trogolling features

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";

    document.getElementById("transfer-money-parent").style.display = "block";
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";

  document.getElementById("get-bonus-parent").style.display = "block";
});

document.getElementById("pay-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";

  document.getElementById("pay-bill-parent").style.display = "block";
});

document
  .getElementById("cashout-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const cashoutAmount = parseInt(
      document.getElementById("cashoutAmount").value
    );

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const totalcashout = availableBalance - cashoutAmount;

    document.getElementById("available-balance").innerText = totalcashout;
  });
