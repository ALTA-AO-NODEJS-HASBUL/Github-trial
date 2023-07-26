function lottery(num) {
  const winningNumber = Math.floor(Math.random() * 1000) + 1; // Generate a random number from 1 to 1000

  return new Promise((resolve, reject) => {
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda...");

    setTimeout(() => {
      if (num === winningNumber) {
        resolve("selamat anda mendapatkan hadiah utama berupa mobil");
      } else {
        reject("maaf anda kurang beruntung");
      }
    }, 10000); // Wait for 10 seconds (the lottery draw time)
  });
}

lottery(13)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));
