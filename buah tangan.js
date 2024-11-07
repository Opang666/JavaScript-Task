// Antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

//Nabila datang
antrian.push("Nabila");

//Maza Elsi datang
antrian.push("Maza", "Elsi");

//Antrian terakhir Elsi gajadi antri
antrian.pop();

//Ray sudah belanja keluar antrian
antrian.shift();

//Fiki sudah belanja keluar antrian
antrian.shift();

//Tomi nyerobot antrian
antrian.unshift("Tomi");

// Menampilkan hasil akhir antrian
console.log(antrian);
