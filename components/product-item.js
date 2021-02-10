// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    let shadow = this.attachShadow({ mode: 'open' });

    // Create nested elements
    const wrapper = document.getElementById('li');
    wrapper.setAttribute('class', 'product');

    const img = wrapper.appendChild(document.createElement('img'));
    img.src = this.getAttribute('img');
    img.alt = this.getAttribute('title');
    img.setAttribute('width', 200);

    const title = wrapper.appendChild(document.createElement('p'));
    title.setAttribute('class', 'title');
    title.textContent = this.getAttribute('title');

    const price = wrapper.appendChild(document.createElement('p'));
    price.setAttribute('class', 'price');
    price.textContent = this.getAttribute('price');

    const button = wrapper.appendChild(document.createElement('button'));
    button.setAttribute('id', this.getAttribute('id'));
    button.setAttribute('onclick', "alert('Added to Cart!')");
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
      let cartCount = document.getElementById('cart-count');
      let cartItems = JSON.parse(localStorage.getItem('cart-items'));

      if (this.textContent == 'Add to Cart') {
        this.textContent = "Remove from Cart";
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        localStorage.setItem
      }
    })

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './styles/styles.css');

    // Attach the created elements to the shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
  }
}

customElements.define('product-item', ProductItem);