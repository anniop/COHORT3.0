function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataID);
            resolve("success")
        }, 1000);
    });
}

// Async Await
async function getAllData() {
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
}

//IIFE - Immediately Invoked Function Expression (Not Reusable)
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

// Promise Chaning
getData(1)
    .then((res) =>{
        console.log("Getting Data 2....PC");
        return getData(2);
    })
    .then((res) => {
        console.log("Getting Data 3....PC");
        return getData(3);
    })
    .then((res) => {
        console.log("Getting Data 4....PC");
        return getData(4);
    })
    .then((res)=> {
        console.log("Success....PC");
    })


// CallBack Hell
getData(1, () => {
    console.log("Getting Data 2....CH");
    getData(2, () => {
        console.log("Getting Data 3....CH");
        getData(3,() => {
            console.log("Getting Data 4....CH");
            getData(4, () => {
                console.log("Success....CH");
            })
        })
    })
})