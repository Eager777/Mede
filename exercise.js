// Latihan 1
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Latihan 2
people.forEach(person => {
  console.log(person);
});

// Latihan 3
let indexOfGreg = people.indexOf("Greg");
if (indexOfGreg !== -1) {
  people.splice(indexOfGreg, 1);
}

// Latihan 4
let indexOfJames = people.indexOf("James");
if (indexOfJames !== -1) {
  people.splice(indexOfJames, 1);
}

// Latihan 5
people.unshift("Matt");

// Latihan 6
let yourName = "Eager"; // Ganti dengan nama Anda
people.push(Eager);

// Latihan 7
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// Latihan 8
let peopleCopy = people.slice(1, 3); // Ini akan menghasilkan salinan array tanpa "Mary" dan "Matt"

// Latihan 9
let people = ["Matt", "Mary", "Elizabeth", "Artie", "Eager"];
let indexDevon = people.indexOf("Devon");
if (indexDevon !== -1) {
  people.splice(indexDevon, 1, "Elizabeth", "Artie");
}

// Latihan 10
let withBob = people.concat("Bob");

// Hasil Akhir
console.log(withBob);
