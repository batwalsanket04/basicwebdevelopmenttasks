// Sample products
const products = [
  {
    id: 1,
    name: "Floral Lehenga ",
    price: 8999,
    oldPrice: 9999,
    img: "lehenga3.jpeg",
  },
  {
    id: 2,
    name: "Pure paithani Lehenga",
    price: 15000,
    oldPrice: 12999,
    img: " lehenga4.jpeg",
  },
  {
    id: 3,
    name: "White Floral Work",
    price: 11500,
    oldPrice: 14000,
    img: "lehenga5.jpeg",
  },
  {
    id: 4,
    name: "Bridal lehenga",
    price: 14999,
    oldPrice: 18000,
    img: " lehenga8.jpeg",
  },
];

const productList = document.getElementById("productList");
const cartPopup = document.getElementById("cartPopup");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartLink = document.getElementById("cartLink");
const closeCart = document.getElementById("closeCart");
const cartItemsList = document.getElementById("cartItems");

let cart = [];

// 🧩 Render products dynamically using map()
productList.innerHTML = products
  .map(
    (p) => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}" />
      <h2>${p.name}</h2>
      <p class="price">₹${p.price} <span class="old-price">₹${p.oldPrice}</span></p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `
  )
  .join("");

// 🛒 Add to Cart Function
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCartCount();
  showPopup();
}

// 🧾 Update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// ✅ Show popup
function showPopup() {
  cartPopup.classList.add("show");
  setTimeout(() => {
    cartPopup.classList.remove("show");
  }, 2000);
}

// 🛍️ Show cart items
cartLink.addEventListener("click", (e) => {
  e.preventDefault();
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty!</li>";
  } else {
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} — ₹${item.price}`;
      cartItemsList.appendChild(li);
    });
  }
  cartModal.style.display = "flex";
});

// ❌ Close cart
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});
