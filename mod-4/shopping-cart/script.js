let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

let cart = [];

// Adds new item to the cart
addItemButton.addEventListener("click", function () {
  let item = itemInput.value;

  if (item === "") {
    alert("Please enter an item.");
    return;
  }

  cart.push(item); // Add item to cart array
  console.log(cart);
  
  renderCart();
  itemInput.value = ""; // Clear the input field
});


// Removes the last item from the cart
removeItemButton.addEventListener("click", function () {
  cart.pop(); // Remove last item from cart array
  renderCart();
});


// Renders the cart list
function renderCart() {
  cartList.innerHTML = ""; // Clear existing list
  for (let i = 0; i < cart.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = cart[i];
    cartList.appendChild(listItem);
  }
}
