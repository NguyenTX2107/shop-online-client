// //Show list of products for admin

// function showListProduct() {
//     getList(); //from database
//     renderList(); //to admin.html
// }

// showListProduct();

// function getList() {
//     const accessUrl = 'http://localhost:8080/api/admin/v1/products'; //product list url
//     // post body data 
//     const accessToken = localStorage.getItem("accessToken");

//     // create request object
//     const request = new Request(accessUrl, {
//         method: 'GET',
//         headers: {'Authorization': `Bearer ${accessToken}`},
//     });

//     // pass request object to `fetch()`
//     fetch(request)
//         .then(function(response) {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw response;
//         })
//         .then(function (data) {
//             localStorage.setItem("products", data);
//             console.log(data);
//         })
// }

// function renderList() {
//     var products = localStorage.getItem("products");
//     var content = document.querySelector("#content"); //chon the main content
//     products.forEach(product => { //voi moi product
//         var list = document.createElement("div"); //tao mot the div chua info cua product trong the main content
//         list.style = "display: flex";      

//         var productImg = document.createElement("img");
//         productImg.src = `${product.img}`;
//         productImg.alt = `Sản phẩm ${product.name}`; 
//         productImg.style = "width: 200px; height: 200px; padding-right: 10px";
//         list.appendChild(productImg); //add anh san pham
        
//         var productInfo = document.createElement("ul");
//         productInfo.style = "list-style-type: none";

//             var name = document.createElement("li");
//             name.innerHTML = `Tên sản phẩm: ${product.name}`;
//             productInfo.appendChild(name);

//             var category = document.createElement("li");
//             category.innerHTML = `Loại: ${product.category}`;
//             productInfo.appendChild(category);

//             var detail = document.createElement("li");
//             detail.innerHTML = `Thông tin chi tiết: ${product.detail}`;
//             productInfo.appendChild(detail);

//             var price = document.createElement("li");
//             price.innerHTML = `Đơn giá: ${product.price}`;
//             productInfo.appendChild(price);
        
//         list.appendChild(productInfo); //add list thong tin ve san pham
//         content.appendChild(list); //add 1 productList vao main content
//     });
// }