class Catalog {
    constructor() {
        this.products = [];
        this.fetchProducts();
        this.initializeEvents();
    }

    async fetchProducts() {
        const response = await fetch('catalog.json');
        this.products = await response.json();
        this.displayProducts(this.products);
    }

    createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productPrice = document.createElement('p');
        productPrice.textContent = `Цена: ${product.price} руб.`;
        
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        
        return productDiv;
    }

    displayProducts(products) {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = this.createProductElement(product);
            productList.appendChild(productElement);
        });
    }

    initializeEvents() {
        const searchInput = document.getElementById('search');
        const categoryFilter = document.getElementById('categoryFilter');

        searchInput.addEventListener('input', () => this.filterProducts(searchInput.value, categoryFilter.value));
        categoryFilter.addEventListener('change', () => this.filterProducts(searchInput.value, categoryFilter.value));
    }

    filterProducts(searchTerm, category) {
        const filteredProducts = this.products.filter(product => {
            const matchesCategory = !category || product.category === category;
            const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearchTerm;
        });
        this.displayProducts(filteredProducts);
    }
}

document.addEventListener('DOMContentLoaded', () => new Catalog());