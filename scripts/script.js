// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let storage = window.localStorage;
  let productList = document.getElementById('product-list');

  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      storage.setItem('products', JSON.stringify(data));
    });
});