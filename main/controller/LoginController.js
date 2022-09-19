//Viết các script cho quản lý trang login vào đây

function startLogin() {
    handleLoginForm();
}

startLogin();

function handleLoginForm() {
    var btnLogin = document.querySelector('#btnLogin');

    btnLogin.addEventListener("click", function() { //neu nhan vao nut dang nhap
        var username = document.querySelector('input[name="usernameLogin"]').value; //lay username va password tu form
        var password = document.querySelector('input[name="passwordLogin"]').value;
       
        const loginUrl = 'http://localhost:8080/api/v1/accounts/login'; //login url
        // post body data
        const accountLoginDto = {username: username, password: password};

        // create login request object
        const request = new Request(loginUrl, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(accountLoginDto) //convert to JSON
        });

        // pass request object to `fetch()`
        fetch(request)
            .then(function (response){
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                localStorage.setItem('credential', JSON.stringify(data)); //gồm access token, refresh token, expired day và scope
                console.log(data);
                return data.scope;
            })
            .then(function(scope) {
                console.log(scope);
                if (scope === "ADMIN") {
                    window.open("/resources/html/admin/admin.html", "_self");
                }
                else if (scope === "USER") {
                    window.open("/resources/html/public/index.html", "_self");
                }
            })
        //Tại sao lại cần promise chain ở đây? Để đảm bảo các hành động được thực hiện đúng thứ tự
        //Do send request đăng nhập lên server sẽ mất thời gian phản hồi => dùng chain để chắc chắn đăng nhập xong thì mới trả về page tương ứng,
        //tránh trường hợp do async mà hành động mở page được thực hiện trước khi đăng nhập xong
    });
}