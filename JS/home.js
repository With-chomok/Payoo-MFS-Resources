const validPin = 1234;
const validNum = 12345678910;
// function get input number
function getInputvalue(id) {
  const inputFieldValue = parseInt(document.getElementById(id).value);
  return inputFieldValue;
}

function getInputValue(id) {
  const inputFieldValues = document.getElementById(id).value;
  return inputFieldValues;
}

function getTextElement(id) {
  const getTextEle = parseInt(document.getElementById(id).innerText);
  return getTextEle;
}

// set innertext
function setInnerText(value) {
  const setInnerValue = document.getElementById("available-balance");

  setInnerValue.innerText = value;
}

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputvalue("bank-account");
    const addAmount = getInputvalue("add-amount");
    const addPin = getInputvalue("add-pin");
    // console.log(bank, accountNumber, addAmount, addPin);

    const availableBalance = getTextElement("available-balance");

    if (accountNumber.length < 11 || accountNumber !== validNum) {
      alert("Invalid Account Number");
      return;
    }
    if(addAmount <= 0 || addAmount < 100 || isNaN(addAmount) ){
      alert("Invalid Amount")
      return;
    }
    if (addPin !== validPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totalBalance = addAmount + availableBalance;

    setInnerText(totalBalance);
  });

// cashout event check velidity pin and number section

document
  .getElementById("cashout-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const agentNumber = getInputvalue("Agent-Number");
    const withdrawPin = getInputvalue("withdraw-pin");
    const withdrawAmount = getInputvalue("cashout-amount");

    const availableBalance = getTextElement("available-balance");
    if (availableBalance <= 0 ) {
      alert("Your balance is not enough");
      return;
    }
    if (agentNumber.length < 11 || agentNumber !== validNum ) {
      alert("Invalid Account Number");
      return;
    }
    if(isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount < 100){
      alert("Invalid Cashout Amount");
      return
    }
    if (withdrawPin !== validPin) {
      alert("Invalid Pin Number");
      return;
    }

    const newavailableBalance = availableBalance - withdrawAmount;

    setInnerText(newavailableBalance);
  });

// troggle function


// from show function element 
function displayEle(id){
    let forms = document.getElementsByClassName("forms");

  for (let form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// function hover buttor Element 

function btnHandleEle(id){
  const formBtns = document.getElementsByClassName("form-btn")
 for(btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f233]")
  btn.classList.add("border-gray-300")
  
 }
 document.getElementById(id).classList.remove("border-gray-300");
document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f233]")

}

// trogolling features

document.getElementById("add-button").addEventListener("click", function () {
  displayEle("add-money-parent")
  btnHandleEle("add-button")

});

document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    displayEle("cash-out-parent");
    btnHandleEle("cashout-button");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    displayEle("transfer-money-parent");
    btnHandleEle("transfer-button")
  });

document.getElementById("bonus-button").addEventListener("click", function () {
displayEle("get-bonus-parent");
btnHandleEle("bonus-button")
});

document.getElementById("pay-button").addEventListener("click", function () {
displayEle("pay-bill-parent");
btnHandleEle("pay-button")
});
document.getElementById("transaction-button").addEventListener("click", function(){
  displayEle("transaction-parent");
  btnHandleEle("transaction-button")
})