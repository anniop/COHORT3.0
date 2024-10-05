// Given an input array, give me back a new array in which every value is multiplied by 2 
//input [1,2,3,4,5]
//output [2,4,5,6,10]

// Solution
const input = [1, 2, 3, 4, 5];

const newArra = [];

for (let i = 0; i < input.length; i++) {
  newArra.push(input[i] * 2);
}

console.log(newArra);
