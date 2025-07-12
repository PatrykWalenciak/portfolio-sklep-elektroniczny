// Koszyk - licznik produktów z animacją
let cartCount = 0;

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    const cart = document.getElementById("cart");
    cart.innerText = `Koszyk: ${cartCount}`;

    // Animacja koszyka
    cart.classList.add("bounce");
    setTimeout(() => cart.classList.remove("bounce"), 300);

    // Animacja przycisku
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});

// Wyszukiwarka - filtrowanie produktów po nazwie
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const name = product.querySelector(".product-name").innerText.toLowerCase();
    product.style.display = name.includes(filter) ? "block" : "none";
  });
});

// Animacja fade-in produktów przy ładowaniu strony
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, i * 100); // opóźnienie dla efektu kaskadowego
  });
});
