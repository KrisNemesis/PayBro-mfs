document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const inputPinNumber = document.getElementById("pin-number").value;
    console.log(inputPinNumber);
    if (inputPinNumber === "1234") {
      console.log("Adding money to your account");

      const balance = document.getElementById("balance").innerText;
      console.log(balance);
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);
      document.getElementById('balance').innerText = newBalance;
    } 
    else {
      alert("Failed to add,Try again!");
    }
    
  });
