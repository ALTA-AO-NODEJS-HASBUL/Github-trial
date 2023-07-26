function getSnack(snack, price, time, remainingBalance, callback) {
  console.log(`kamu jajan ${snack} dengan harga Rp. ${price}`);
  setTimeout(() => {
    if (remainingBalance >= price) {
      console.log(`sisa uang kamu Rp. ${remainingBalance - price}`);
      remainingBalance -= price;
    } else {
      console.log(`Maaf uang kamu belum cukup untuk membeli ${snack}`);
      console.log(`Sisa uang kamu sebesar Rp. ${remainingBalance}`);
    }
    callback(remainingBalance);
  }, time * 1000);
}

function getBobaAndSeblak(balance) {
  getSnack("Boba", 5000, 5, balance, (remainingBalanceAfterBoba) => {
    getSnack("Seblak", 8000, 9, remainingBalanceAfterBoba, (remainingBalanceAfterSeblak) => {
    console.log(`maaf uang kamu belum cukup untuk membeli seblak sisa uang kamu RP`, remainingBalanceAfterSeblak);

        })
      })
    };


const initialBalance = 20000;
getBobaAndSeblak(initialBalance);
