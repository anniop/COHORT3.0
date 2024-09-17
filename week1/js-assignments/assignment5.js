function sum(num) {
    let i = 0;
    let Sum = 0;
    for(i = 1;i <= num;i++) {
        Sum = Sum + i;
    }
    return Sum;
}


let Sum = sum(10);
console.log(Sum);