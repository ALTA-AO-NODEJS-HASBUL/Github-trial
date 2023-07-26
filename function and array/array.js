function joinAndRemoveDuplicates(array1, array2) {
  let combinedArray = array1.concat(array2);
  let uniqueArray = Array.from(new Set(combinedArray));
  return uniqueArray;
}
//contoh
let array1 = ["apel", "nanas", "anggur"]
let array2 = ["pisang", "apel"]
let array3 = ["apel", "nanas",]
let array4 = ["apel", "anggur"]
let result = joinAndRemoveDuplicates(array1, array2)(array3, array4)
console.log(result);