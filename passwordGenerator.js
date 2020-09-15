function getPassword() {
    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()[]><";
    let passwordLength = 16;
    let password = "";

    for(var i = 0; i<passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        }

        document.querySelector('#password').value = password;
    }