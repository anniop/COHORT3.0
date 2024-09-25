function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("data", dataID);
        if(getNextData) {
            getNextData();
        }
    },2000); 
}

// CallBack Hell
getData(1, () => {
    console.log("Getting Data 2...");
    getData(2, () =>{
        console.log("Getting Data 3...");
        getData(3, () => {
            console.log("Getting Data 4...");
            getData(4, ()=> {
                console.log("Task Finish...");
            })
        });
    });
});