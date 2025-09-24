//Day 3 – Loops

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//break → exit loop early
//continue → skip one iteration

// Sum of first 5 numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum:", sum); // 15

// Print even numbers 1–10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// While loop countdown
let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}
console.log("Blastoff!");

for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  console.log(i);
  console.log(i,i);
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

