function logName() {
    console.log("Jay Ganesh");
}

setTimeout(logName,3000);

function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}

function logName2() {
    console.log("Har Har Mahadev");
}

setTimeoutPromisified(3000).then(logName2);