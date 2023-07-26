function mostAppearItem(items) {
  const itemCounts = {};

  // Count the occurrences of each item
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (itemCounts[item]) {
      itemCounts[item]++;
    } else {
      itemCounts[item] = 1;
    }
  }

  // Sort the items based on their counts
  const sortedItems = Object.keys(itemCounts).sort((a, b) => itemCounts[a] - itemCounts[b]);

  // Generate the output string
  let output = "";
  for (let i = 0; i < sortedItems.length; i++) {
    const item = sortedItems[i];
    output += `${item}->${itemCounts[item]} `;
  }

  return output.trim();
}

// Example usage
const items = ["js", "js", "golang", "ruby", "ruby", "js", "js"];
const result = mostAppearItem(items);
console.log(result);
