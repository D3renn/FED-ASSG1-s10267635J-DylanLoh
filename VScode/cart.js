document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const renderCart = () => {
      cartItemsContainer.innerHTML = "";
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartCount.textContent = "0";
        return;
      }
  
      cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <h3>${item.name}</h3>
            <p>- Classic Tees Sale!</p>
            <p>Size: Medium</p>
          </div>
          <div class="item-quantity">
            <button onclick="decreaseQuantity(${index})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
          </div>
          <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <div class="item-remove">
            <a href="#" onclick="removeItem(${index})">Remove</a>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
  
      cartCount.textContent = cart.length;
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