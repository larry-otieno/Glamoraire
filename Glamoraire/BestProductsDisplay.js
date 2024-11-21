document.addEventListener('DOMContentLoaded', async () => {
    const offersContainer = document.getElementById('offers-container');
    const bestProductsContainer = document.getElementById('best-products-container');

    // Fetch and display products on offers
    const offersResponse = await fetch('/api/offers');
    const offersData = await offersResponse.json();
    renderProducts(offersData, offersContainer);

    // Fetch and display best performing products
    const bestProductsResponse = await fetch('/api/best-products');
    const bestProductsData = await bestProductsResponse.json();
    renderProducts(bestProductsData, bestProductsContainer);
});

function renderProducts(data, container) {
    data.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        // Customize the product display based on your requirements
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
            ${product.isOnSale ? '<span class="sale-tag">Sale</span>' : ''}
        `;

        container.appendChild(productElement);
    });
}