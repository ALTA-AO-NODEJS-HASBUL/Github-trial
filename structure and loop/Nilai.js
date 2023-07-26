const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getLetterGrade(score) {
  if (score >= 80 && score <= 100) {
    return 'A';
  } else if (score >= 65 && score <= 79) {
    return 'B+';
  } else if (score >= 50 && score <= 64) {
    return 'B';
  } else if (score >= 35 && score <= 49) {
    return 'C';
  } else if (score >= 0 && score <= 34) {
    return 'D';
  } else {
    return 'invalid';
  }
}

rl.question('Masukkan nilai mahasiswa: ', (answer) => {
  const score = parseInt(answer);
  if (isNaN(score) || score < 0 || score > 100) {
    console.log('Nilai tidak valid!');
  } else {
    const letterGrade = getLetterGrade(score);
    console.log(`Nilai huruf: ${letterGrade}`);
  }
  rl.close();
});
