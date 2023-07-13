// Fungsi untuk menghitung luas permukaan tabung
function hitungLuasPermukaanTabung(jariJari, tinggi) {
    const luasAlas = 2 * Math.PI * Math.pow(jariJari, 2);
    const luasSelimut = 2 * Math.PI * jariJari * tinggi;
    const luasPermukaan = luasAlas + luasSelimut;
    return luasPermukaan.toFixed(2); // Mengembalikan hasil dengan 2 angka di belakang koma
  }
  
  // Contoh penggunaan fungsi
  const jariJari = 4; // Jari-jari tabung
  const tinggi = 20; // Tinggi tabung
  const luasPermukaan = hitungLuasPermukaanTabung(jariJari, tinggi);
  console.log("Luas permukaan tabung: " + luasPermukaan);
  
