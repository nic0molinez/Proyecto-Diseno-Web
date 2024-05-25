document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var isValid = true;

    if (!name) {
        isValid = false;
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (!username) {
        isValid = false;
        document.getElementById('usernameError').style.display = 'block';
    } else {
        document.getElementById('usernameError').style.display = 'none';
    }

    if (!email || !validateEmail(email)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (!phone || !validatePhone(phone)) {
        isValid = false;
        document.getElementById('phoneError').style.display = 'block';
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (!password || password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').style.display = 'block';
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirmPasswordError').style.display = 'block';
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    if (isValid) {
        // Mostrar modal de éxito
        var modal = document.getElementById('successModal');
        var span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }
});

