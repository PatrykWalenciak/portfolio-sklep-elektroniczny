document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      const cart = document.getElementById("cart");
      cart.innerText = `Koszyk: ${cartCount}`;

      cart.classList.add("bounce");
      setTimeout(() => cart.classList.remove("bounce"), 300);

      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 200);
    });
  });
  document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      const name = product
        .querySelector(".product-name")
        .innerText.toLowerCase();
      product.style.display = name.includes(filter) ? "block" : "none";
    });
  });
  window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, i * 100);
    });
  });
});
