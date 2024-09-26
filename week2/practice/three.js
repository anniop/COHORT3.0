function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            
            if (dataID){
                resolve('success');
            } else {
                reject('rejected');
            }
        },5000);
    }); 
}
