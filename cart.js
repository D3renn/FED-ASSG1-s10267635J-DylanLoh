// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items"); // Container to display cart items
    const totalPriceElement = document.getElementById("total-price"); // Element to display total price
    const cartCountElement = document.getElementById("cart-count"); // Element to display cart item count
    const checkoutButton = document.getElementById("checkout-button"); // Button to trigger checkout

    // Retrieve the cart from localStorage or initialize an empty cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render the cart items
    const renderCart = () => {
        cartItemsContainer.innerHTML = ""; // Clear the cart items container
        if (cart.length === 0) {
            // If the cart is empty, show a placeholder message
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "0.00"; // Set total price to 0
            cartCountElement.textContent = "0"; // Update cart count to 0
            checkoutButton.disabled = true; // Disable checkout button if cart is empty
            return;
        }

        checkoutButton.disabled = false; // Enable checkout button if cart has items

        let totalPrice = 0; // Variable to calculate total price
        let totalItems = 0; // Variable to calculate total item count

        // Loop through the cart items and render each item
        cart.forEach((item, index) => {
            totalPrice += item.price * item.quantity; // Calculate the total price
            totalItems += item.quantity; // Calculate the total quantity

            // Create a new cart item element
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item"; // Assign a class for styling
            cartItem.innerHTML = `
                <div class="item-details">
                    <img src="${item.image}" alt="${item.name}"> <!-- Item image -->
                    <h3>${item.name}</h3> <!-- Item name -->
                    <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div> <!-- Item price -->
                    <div class="item-quantity">
                        <!-- Buttons to increase or decrease item quantity -->
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>
                <div class="item-remove">
                    <!-- Remove item link -->
                    <a href="#" onclick="removeItem(${index})">Remove</a>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem); // Add the cart item to the container
        });

        totalPriceElement.textContent = totalPrice.toFixed(2); // Update the total price
        cartCountElement.textContent = totalItems; // Update the cart count
    };

    // Function to increase the quantity of an item
    window.increaseQuantity = (index) => {
        cart[index].quantity += 1; // Increment the item quantity
        updateCart(); // Update the cart and re-render
    };

    // Function to decrease the quantity of an item
    window.decreaseQuantity = (index) => {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1; // Decrement the item quantity if it's greater than 1
        } else {
            cart.splice(index, 1); // Remove the item from the cart if quantity is 1
        }
        updateCart(); // Update the cart and re-render
    };

    // Function to remove an item from the cart
    window.removeItem = (index) => {
        cart.splice(index, 1); // Remove the item at the given index
        updateCart(); // Update the cart and re-render
    };

    // Function to update the cart in localStorage and re-render it
    const updateCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage
        renderCart(); // Re-render the cart items
    };

    // Function to handle checkout
    const checkout = () => {
        if (cart.length > 0) {
            alert("Thank you for your purchase!"); // Display a confirmation message
            cart.length = 0; // Clear the cart
            updateCart(); // Update the cart in localStorage and re-render it
        }
    };

    checkoutButton.addEventListener("click", checkout); // Add event listener for the checkout button

    renderCart(); // Initial rendering of the cart on page load
});