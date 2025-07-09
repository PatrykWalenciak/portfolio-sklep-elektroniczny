const filterInput = document.getElementById("filterInput");
const productList = document.getElemenrtById("product-list");
const products = Array.from(productList.getElementsByClassName("product"));

filterInput.addEventListener("input", () => {
  const value = filterInput.value.toLowerCase();
  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = title.includes(value) ? "block" : "none";
  });
});

let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});
