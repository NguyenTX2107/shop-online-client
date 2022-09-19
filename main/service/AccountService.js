//

export class AccountService {
    constructor(){};
    
    save(account) {
        return localStorage.setItem("account", account);
    }

    get() {
        var credential = localStorage.getItem("credential");
        var accessToken = credential.accessToken;

        const url = "http://localhost:8080/api/v1/accounts";

        const request = new Request(url, {
            method: "GET",
            headers: {'Authorization': `Bearer ${accessToken}`},
        })

        fetch(request)
        .then(function(response){
            if(response.ok) {
                console.log(response);
                localStorage.setItem("account", response);
            }
            throw response;
        });
        return localStorage.getItem("account");
    }

    remove(account) {
        localStorage.removeItem("account");
    }
}