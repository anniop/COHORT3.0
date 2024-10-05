// Filtering
// What if i tell you, given an input array, give me back all the even values from it

const input = [1, 2, 3, 4, 5, 6];

//Solution

const newArr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    newArr.push(input[i]);
  }
}

console.log(newArr);
