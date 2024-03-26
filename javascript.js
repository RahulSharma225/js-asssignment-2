// Define a smoothie list
const smoothies = {
  1: { name: "Strawberry Banana", price: 5.99 },
  2: { name: "Tropical Mango", price: 7.99 },
  3: { name: "Green Detox", price: 4.99 },
};

// Initialize an empty order
let order = [];

// Function to add a smoothie to the order
function addItem(productId, quantity) {
  const smoothie = smoothies[productId];
  if (smoothie) {
    order.push({ ...smoothie, quantity });
    console.log(`${smoothie.name} added to the order.`);
  } else {
    console.log("Smoothie not found.");
  }
}

// Function to calculate the total of the order
function calculateTotal() {
  return order.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to display the order summary in HTML
function displayOrder() {
  const orderSummaryDiv = document.getElementById("orderSummary");
  orderSummaryDiv.innerHTML = "<h3>Order Summary:</h3>";

  order.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${index + 1}. ${item.name} - $${item.price} x ${
      item.quantity
    }`;
    orderSummaryDiv.appendChild(itemElement);
  });

  const totalElement = document.createElement("div");
  totalElement.textContent = `Total: $${calculateTotal().toFixed(2)}`;
  orderSummaryDiv.appendChild(totalElement);
}

// Example usage:
addItem(1, 2); // Add 2 Strawberry Banana smoothies to the order
addItem(2, 1); // Add 1 Tropical Mango smoothie to the order
displayOrder(); // Display the order summary on the webpage
