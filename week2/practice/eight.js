function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataID);
            resolve("success")
        }, 1000);
    });
}

(async function () {
    console.log("Getting Data 1.....AA");
    await getData(1);
    console.log("Getting Data 2.....AA");
    await getData(2);
    console.log("Getting Data 3.....AA");
    await getData(3);
    console.log("Getting Data 4.....AA");
    await getData(4);
    console.log("Getting Data 5.....AA");
    await getData(5);
    console.log("Success...AA");   
})();