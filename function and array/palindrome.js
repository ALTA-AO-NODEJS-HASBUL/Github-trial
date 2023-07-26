function isPalindrome(str) {
  // Menghapus semua spasi dan mengubah string menjadi huruf kecil
  str = str.replace(/\s/g, '').toLowerCase();

  // Membandingkan string dengan kebalikan dari string tersebut
  return str === str.split('').reverse().join('');
}
// Contoh penggunaan fungsi
let string1 = 'katak';
console.log(isPalindrome(string1));  

let string2 = 'kupu-kupu';
console.log(isPalindrome(string2)); 
