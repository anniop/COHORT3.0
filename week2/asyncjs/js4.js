function timeout() {
    console.log("Click Me!!!");
}

console.log("Hi");

setTimeout(timeout, 1000);

console.log("Welcome !!!");

let c = 0;

for(let i = 0; i<10000000;i++){
    c = c+1;
}
console.log("Expensive Operation Done!!!");
