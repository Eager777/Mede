function cekBilangan(angka) {
    if (angka > 0) {
        return "Bilangan positif";
    } else if (angka < 0) {
        return "Bilangan negatif";
    } else {
        return "Nol";
    }
}

// Contoh penggunaan fungsi
var inputAngka = parseFloat(prompt("Masukkan angka: "));
var hasilCek = cekBilangan(inputAngka);
console.log("Angka " + inputAngka + " adalah " + hasilCek);
