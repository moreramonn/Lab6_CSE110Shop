// Script.js
myStorage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      if (myStorage.getItem('products') == null) {
        myStorage.setItem('products', JSON.stringify(data));
      }
    });

  let products = JSON.parse(myStorage.getItem('products'));
  let productList = document.getElementById('product-list');
  let productItem = productList.appendChild(document.createElement('product-item'));
          
  for (let i = 0; i < products.length; i++) {
    productItem.setAttribute('img', products[i].img);
    productItem.setAttribute('title', products[i].title);
    productItem.setAttribute('price', products[i].price);
    productItem.setAttribute('id', products[i].id);
  }  
});

