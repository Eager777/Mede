const checkNumber = (function() {
    return function(number, callback) {
      if (typeof number !== 'number') {
        callback("Input bukan angka");
      } else if (number > 0) {
        callback("Bilangan positif");
      } else if (number < 0) {
        callback("Bilangan negatif");
      } else {
        callback("Nol");
      }
    };
  })();
  
  const inputNumber = 5; // Ganti dengan angka yang ingin diuji
  
  checkNumber(inputNumber, function(result) {
    console.log(result);
  });
  