const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Jay Ganesh");
        reject("rejected");
    });
}

let promise = getPromise();
promise.then( (res) => {
    console.log("Har Har Mahadev", res);
});

promise.catch((err) => {
    console.log("Radhe Radhe", err);
})