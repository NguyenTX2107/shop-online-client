//Show list of products for public

function showListProduct() {
    getLists(renderLists);
}

showListProduct();

function getLists(callback) { //get list of products from database
    const accessUrl = 'http://localhost:8080/api/v1/products'; //product list url

    // create request object
    const request = new Request(accessUrl, {
        method: 'GET',
        // headers: {'Authorization': `Bearer ${accessToken}`}, //public, k can token
    });

    // pass request object to `fetch()`
    fetch(request)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(function (data) {
            sessionStorage.setItem("products", JSON.stringify(data)); //luu vao session
            console.log(data);
        })
        .then(callback);
}

function renderLists() { //render to index.html
    var content = document.querySelector("#publicContent"); //chon the content
    var pageProducts = JSON.parse(sessionStorage.getItem("products"));

    if (pageProducts === null) {
        console.log("Empty");
        var emptyMessage = document.createElement("h1");
        emptyMessage.innerHTML= "List sản phẩm trống";
        content.appendChild(emptyMessage);
    }
    else {
        var products = pageProducts.content;

        products.forEach( function(product){ //voi moi product
            var list = document.createElement("div"); //tao mot the div chua info cua product trong the main content
            list.style = "display: flex; padding-bottom: 15px";      

            var productImg = document.createElement("img");
            productImg.src = `${product.image}`;
            productImg.alt = `Sản phẩm ${product.name}`; 
            productImg.style = "max-width: 200px; max-height: 200px; padding-right: 10px";
            list.appendChild(productImg); //add anh san pham
            
            var productInfo = document.createElement("ul");
            productInfo.style = "list-style-type: none";
                var name = document.createElement("li");
                name.innerHTML = `Tên sản phẩm: ${product.name}`;
                productInfo.appendChild(name);

                var category = document.createElement("li");
                category.innerHTML = `Loại: ${product.category}`;
                productInfo.appendChild(category);

                var detail = document.createElement("li");
                detail.innerHTML = `Thông tin chi tiết: ${product.detail}`;
                productInfo.appendChild(detail);

                var price = document.createElement("li");
                price.innerHTML = `Đơn giá: ${product.price}`;
                productInfo.appendChild(price);
                
                var btnAddCart = document.createElement("button");
                btnAddCart.innerHTML = 'Thêm sản phẩm vào giỏ hảng';
                btnAddCart.addEventListener("click", addCartItem(product.id));
                productInfo.appendChild(btnAddCart);  
            list.appendChild(productInfo); //add list thong tin ve san pham

            content.appendChild(list); //add 1 list vao main content
        });
    }
}

function addCartItem(id) {
    // const url = 'http://localhost:8080/api/v1/carts/' + id; //product list url
    // var credential = JSON.parse(localStorage.getItem("credential"));
    // var accessToken = credential.accessToken;

    // // create request object
    // const request = new Request(url, {
    //     method: 'POST',
    //     headers: {'Authorization': `Bearer ${accessToken}`}
    // });

    // // pass request object to `fetch()`
    // fetch(request)
    //     .then(function(response) {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw response;
    //     })
    //     .then(function (data) {
    //         sessionStorage.setItem("shoppingCart", JSON.stringify(data)); //luu shopping cart vao session
    //         console.log(data);
    //     })
    console.log("Hello "+id);
}