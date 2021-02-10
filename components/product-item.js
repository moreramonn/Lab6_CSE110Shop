// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Create nested elements
    const wrapper = document.getElementById('li');
    wrapper.setAttribute('class', 'product');

    const productImg = wrapper.appendChild(document.createElement('img'));
    productImg.src = this.getAttribute('src');
    productImg.alt = this.getAttribute('alt');
    productImg.setAttribute('width', 200);

    const title = wrapper.appendChild(document.createElement('p'));
    title.setAttribute('class', 'title');
    title.textContent = this.getAttribute('title');

    const price = wrapper.appendChild(document.createElement('p'));
    price.setAttribute('class', 'price');
    price.textContent = this.getAttribute('price');

    const addToCart = wrapper.appendChild(document.createElement('button'));
    addToCart.setAttribute('onclick', "alert('Added to Cart!')");
    addToCart.addEventListener('click', (event) => {
      let addToCartBtn = event.target;
    })

    // Apply external styles to the shadow dom
    const style = document.createElement('style');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'style.css');

    // Attach the created elements to the shadow dom
    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define('product-item', ProductItem);