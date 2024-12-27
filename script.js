let cart = [];
let total = 0;

// Sample product data
const products = [
    { name: "HD Camera", price: 24599 },
    { name: "Smart Watch", price: 16399 },
    { name: "Perfume", price: 4099 },
    { name: "Mouse", price: 2459 },
    { name: "Mug", price: 1229 },
    { name: "Wireless Earbuds", price: 7389 }
];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.querySelector('.cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ₹${item.price.toFixed(2)}`; // Display price in Rupees
        cartItemsDiv.appendChild(div);
    });
    document.getElementById('total').textContent = `Total: ₹${total.toFixed(2)}`; // Display total in Rupees
}

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}


    