// // Viết các script cho quản lí Authority ở đây (tác động đến tất cả các .html) 
// // gồm sidebar, hiển thị link đăng ký/đăng nhập, đăng xuất

// function controlSidebar() {
//     renderSidebar();
// } 

// controlSidebar();

// function hideSidebar() {
//     var mySidebar = document.getElementById("mySidebar");
//     mySidebar.style.display = "none";
//     mySidebar.style.transition = "all linear .3s";
// }

// function openSidebar() {
//     var mySidebar = document.getElementById("mySidebar");
//     mySidebar.style.display = "block";
// }

// function renderSidebar() {
//     var mySidebar = document.querySelector("#mySidebar");
//     var account = getAccountDetail();
//     console.log(account);
//     var credential = JSON.parse(localStorage.getItem("credential"));
//     var scope = credential.scope;
    
//     var sidebarUsername = document.querySelector("#sidebarUsername");
//     if (scope != "USER") {
//         sidebarUsername.innerHTML = 'Chào mừng quý khách';
//     }
//     else if (scope === "USER") {
//         sidebarUsername.innerHTML = `Chào mừng, ${account.username}`;
//     }
// }

// function getAccountDetail() {
//     var credential = JSON.parse(localStorage.getItem("credential"));
//     var accessToken = credential.accessToken;

//     const url = "http://localhost:8080/api/v1/accounts";

//     const request = new Request(url, {
//         method: "GET",
//         headers: {'Authorization': `Bearer ${accessToken}`},
//     })

//     fetch(request)
//     .then(function(response){
//         if(response.ok) {
//             console.log(response);
//             localStorage.setItem("account", response);
//         }
//         throw response;
//     });
//     return localStorage.getItem("account");
// }

