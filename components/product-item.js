// product-item.js
class ProductItem extends HTMLElement {
    // TODO
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
        // Create nested elements
        const wrapper = document.createElement('li');
        wrapper.setAttribute('class', 'product');

        const img = wrapper.appendChild(document.createElement('img'));
        img.setAttribute('src', this.getAttribute('image'));
        img.setAttribute('alt', this.getAttribute('title'));
        img.setAttribute('width', 200);
    
        const title = wrapper.appendChild(document.createElement('p'));
        title.innerHTML = this.getAttribute('title');
        title.setAttribute('class', 'title');

        const price = wrapper.appendChild(document.createElement('p'));
        price.innerHTML = '$' + this.getAttribute('price');
        price.setAttribute('class', 'price');
  
        const button = wrapper.appendChild(document.createElement('button'));
        let cartCount = document.getElementById('cart-count');

        if (localStorage.getItem(this.getAttribute('id'))) {
            button.innerHTML = 'Remove from Cart';
            cartCount.innerHTML = parseInt(++cartCount.innerHTML);
        } 
        else {
            button.innerHTML = 'Add to Cart';
        }
        
        button.onclick = () => {
            if (button.innerHTML == 'Add to Cart') {     
                alert('Added to Cart!');
                localStorage.setItem(this.getAttribute('id'), 'id');
                cartCount.innerHTML = parseInt(++cartCount.innerHTML);
                button.innerHTML = 'Remove from Cart';
            } 
            else {
                alert('Removed from Cart!');
                localStorage.removeItem(this.getAttribute('id'));
                cartCount.innerHTML = parseInt(--cartCount.innerHTML);
                button.innerHTML = 'Add to Cart';
            }
        };
        
        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './styles/styles.css');
        
        // Attach the created elements to the shadow dom
        this.shadowRoot.appendChild(wrapper);
        this.shadowRoot.appendChild(linkElem);
        }
  }
  
  customElements.define("product-item", ProductItem);
