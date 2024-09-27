let counter = 1;
function callback() {
    console.log(counter);
    counter  = counter + 1;
}
setInterval(callback,1000);