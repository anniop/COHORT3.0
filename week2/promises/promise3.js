function  random(resolve) {
    resolve();
}
let p = new Promise(random);    // Supposed to return you something eventually.

function callback() {
    console.log("Jay Ganesh");
}
p.then(callback);
