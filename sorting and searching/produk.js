// Array of product prices
const productPrices = [25000, 25000, 10000, 14000];

// Function to handle a user purchasing a product
function buyProduct(money) {
  let numberOfProductsPurchased = 0;
  let remainingMoney = money;

  // Sort the product prices from lowest to highest
  const sortedPrices = productPrices.sort((a, b) => a - b);

  for (let i = 0; i < sortedPrices.length; i++) {
    if (remainingMoney >= sortedPrices[i]) {
      numberOfProductsPurchased += 1;
      remainingMoney -= sortedPrices[i];
    } else {
      break; // Stop purchasing if there's not enough money
    }
  }

  return numberOfProductsPurchased;
}

// Example usage
const availableMoney = 50000;
const purchasedProducts = buyProduct(availableMoney);

console.log(`Total products purchased: ${purchasedProducts}`);
