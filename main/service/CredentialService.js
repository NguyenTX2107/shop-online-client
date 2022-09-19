// Send username and password to Spring boot server,
// receive token and role, save them to local storage

class CredentialService {
    constructor(){};
    get(username, password) {
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
            })
    }

    remove() {
        let check = localStorage.removeItem("token");
        if (check === null) {
            console.log("Error while removing token");
        }
        else console.log("Successfully remove token")
    }
}