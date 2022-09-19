//

function startRegister() {
    handleRegisterForm();
}

startRegister();

function handleRegisterForm() {
    var btnRegister = document.querySelector("btnRegister");

    btnRegister.addEventListener("click", function(){
        var username = document.querySelector('input[name="usernameRegister"]').value;
        var password = document.querySelector('input[name="passwordRegister"]').value;
        var phone = document.querySelector('input[name="phone"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var avatarUrl = document.querySelector('input[name="avatarUrl"]').value;

        const registerUrl = "http://localhost:8080/api/v1/accounts/register"

        const accountRegisterDto = {
            username: username,
            password: password,
            phone: phone,
            email: email,
            avatarUrl: avatarUrl
        }

        const request = new Request(registerUrl, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(accountRegisterDto)
        });
    })
}