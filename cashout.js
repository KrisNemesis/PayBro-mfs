document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('clicked')
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);
    if (pinNumber === '1234') {
        console.log('Cash Out Successful')
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber
        document.getElementById('balance').innerText = newBalance;
        console.log(balance)

    } else {
        alert('Something Wrong')
    }

    
})