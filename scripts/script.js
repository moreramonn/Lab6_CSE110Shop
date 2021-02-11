// Script.js
myStorage = window.localStorage;
let productList = document.getElementById('product-list')

window.addEventListener('DOMContentLoaded', () => {
    // TODO

    if (myStorage.getItem('products') == null) {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                myStorage.setItem('products', JSON.stringify(data));
            });
    }
        
    let products = JSON.parse(myStorage.getItem('products'));

    for (let i = 0; i < products.length; ++i) {
        let productItem = document.createElement('product-item');

        productItem.setAttribute('id', products[i].id);
        productItem.setAttribute('image', products[i].image);
        productItem.setAttribute('title', products[i].title);
        productItem.setAttribute('price', products[i].price);

        productList.appendChild(productItem);
    }

});

