// function myFirst() {
//   myDisplayer("Bye");
// }

// function mySecond(callback) {
//   myDisplayer("Alo");
//   callback();
// }

// function myDisplayer(message) {
//   console.log(message);
// }

// mySecond(myFirst);

// console.log("paragraf1");
// setTimeout(() =>{
// 	console.log("paragraf2");
// }, 4000);
// console.log("paragraf3");

// function setTime() {
//   const header = document.getElementById("header");
//   header.textContent = new Date().toString();
// }
// setInterval(setTime, 1000);
// console.log("Program Finish");

function safeDivide(dividend, divisor) {
  try {
    // Periksa apakah kedua input adalah angka
    if (typeof dividend !== 'number' || typeof divisor !== 'number') {
      throw new Error("Both inputs must be numbers.");
    }

    // Periksa apakah divisor (pembagi) adalah nol
    if (divisor === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // Lakukan pembagian jika semua pemeriksaan valid
    return dividend / divisor;
  } catch (error) {
    // Tangkap kesalahan dan cetak pesan kesalahan
    console.error(error.message);
    return null; // Mengembalikan null jika ada kesalahan
  }
}

// Contoh penggunaan
console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: Division by zero is not allowed.
console.log(safeDivide(10, 'a')); // Output: Both inputs must be numbers.