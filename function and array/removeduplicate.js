function removeDuplicates(array) {
  let uniqueArray = [];

  array.forEach((item) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });

  return uniqueArray;
}

// Contoh penggunaan fungsi
let array = [2,3,3,3,6,9,9];
let result = removeDuplicates(array);
console.log(result);
