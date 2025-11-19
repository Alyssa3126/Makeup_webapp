document.addEventListener("DOMContentLoaded", () => {
  let cartContainer = document.querySelector(".cart-container");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = ""; // clear previous content
    cartItems.forEach(item => {
      cartContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" width="100">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
        </div>
      `;
    });
  }
});