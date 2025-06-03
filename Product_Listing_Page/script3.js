const products = [
  { name: "T-shirt", price: 20, category: "clothing" },
  { name: "Laptop", price: 500, category: "electronics" },
  { name: "Headphones", price: 50, category: "electronics" },
  { name: "Jeans", price: 40, category: "clothing" },
];

const container = document.getElementById("product-container");
const categoryFilter = document.getElementById("category-filter");
const priceSort = document.getElementById("price-sort");

function displayProducts(productList) {
  container.innerHTML = "";
  productList.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p>`;
    container.appendChild(div);
  });
}

function updateDisplay() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = priceSort.value;
  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.onchange = updateDisplay;
priceSort.onchange = updateDisplay;

displayProducts(products);
