function setTimeoutPromisified(duration) {
    return new Promise(function (resolve){
        setTimeout(resolve, duration);
    });
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Jay Ganesh");
    
    await setTimeoutPromisified(3000);
    console.log("Har Har Mahadev");
    
    await setTimeoutPromisified(5000);
    console.log("Jay Shri Krishna");
    
}

solve();