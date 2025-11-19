document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");
  const clearCartBtn = document.getElementById("clearCart");
  const cartAmount = document.querySelector(".cartAmount");

  // Load saved cart count and items
  let count = parseInt(localStorage.getItem("cartCount")) || 0;
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartAmount.textContent = count;

  // Add to cart
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const image = button.closest(".product-card").querySelector("img").src;

      // Update count
      count++;
      cartAmount.textContent = count;
      localStorage.setItem("cartCount", count);

      // Save item to localStorage
      cartItems.push({ name, price, image });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
  });

  // Clear cart
  clearCartBtn.addEventListener("click", () => {
    count = 0;
    cartAmount.textContent = count;
    localStorage.setItem("cartCount", count);
    localStorage.removeItem("cartItems");
  });
});