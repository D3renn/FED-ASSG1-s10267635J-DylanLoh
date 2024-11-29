document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartCountElement = document.getElementById("cart-count");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const renderCart = () => {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "0.00";
            cartCountElement.textContent = "0"; // Update cart count to 0
            return;
        }

        let totalPrice = 0;
        let totalItems = 0;

        cart.forEach((item, index) => {
            totalPrice += item.price * item.quantity;
            totalItems += item.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div class="item-details">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="item-quantity">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>
                <div class="item-remove">
                    <a href="#" onclick="removeItem(${index})">Remove</a>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
        cartCountElement.textContent = totalItems; // Update cart count
    };

    window.increaseQuantity = (index) => {
        cart[index].quantity += 1;
        updateCart();
    };

    window.decreaseQuantity = (index) => {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    };

    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    const updateCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    renderCart();
});