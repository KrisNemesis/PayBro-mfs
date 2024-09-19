document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Click ');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if (phoneNumber=== '5' && pinNumber=== '1234') {
        console.log("Login Successful"); 
        window.location.href = 'home.html'
    }
    else {
        alert('Wrong Number or PIN')
    }

})