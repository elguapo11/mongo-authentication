const number = 5;

function doesThisWork(number) {
  if (number === 5) {
    let number = 6;
    console.log(`this is number 6 `);
    return number;
  }
  if (number === 6) {
    let number = 7;
    console.log(`this is number 7`);
    return number;
  }
}

console.log(number);
doesThisWork(5);
