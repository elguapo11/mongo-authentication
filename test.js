const isMorning = false; // or false
const isWeekend = false; // or true

const greeting = isMorning
  ? isWeekend
    ? 'Good morning, and happy weekend!'
    : 'Good morning, have a great day!'
  : isWeekend
  ? 'Good day, enjoy the weekend!'
  : 'Good day, make it awesome!';

console.log(greeting);

//condition ? expressionIfTrue : expressionIfFalse
