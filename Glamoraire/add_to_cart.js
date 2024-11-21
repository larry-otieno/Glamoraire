// Get the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('button[type="button"]');

// Add an event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Get the product information
    const product = button.closest('.product');
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;

    // Add the product to the shopping cart
    const cart = document.querySelector('#cart');
    const cartItem = document.createElement('div');
    cartItem.textContent = `${productName} - ${productPrice}`;
    cart.appendChild(cartItem);

    // Calculate the total price
    const totalPrice = document.querySelector('#total-price');
    const currentTotal = parseFloat(totalPrice.textContent);
    const newTotal = currentTotal + parseFloat(productPrice);
    totalPrice.textContent = newTotal.toFixed(2);
  });
});