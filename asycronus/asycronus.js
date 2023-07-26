const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

function buyApparel(money, objItem, callback) {
  if (money >= objItem.price) {
    console.log(`Membeli ${objItem.item} dengan harga Rp. ${objItem.price}`);
    console.log(`Uang yang dibawa: Rp. ${money}`);
    money -= objItem.price;
    console.log(`Sisa uang setelah pembelian: Rp. ${money}`);
    console.log(`Waktu yang dibutuhkan: ${objItem.time} detik\n`);
  } else {
    console.log(`Uang tidak cukup untuk membeli ${objItem.item}\n`);
  }
  callback(money);
}

let remainingMoney = 150000;

buyApparel(remainingMoney, clothes, (money) => {
  buyApparel(money, pants, (money) => {
    buyApparel(money, hat, (money) => {
      buyApparel(money, shoes, (money) => {
        console.log(`Sisa kembaliannya adalah Rp. ${money}`);
      });
    });
  });
});
